import { Button } from '@/components/Button/Button'
import SentenceCard from '@/components/SentenceCard/SentenceCard'
import Paging from '@/components/paging/Paging'
import { useUserContext } from '@/context'
import {
  AdminSimplifiedPageDeleteSentenceButton,
  AdminSimplifiedPageSentenceNotRejected,
  AdminSimplifiedPageSentenceNotVerified,
  AdminSimplifiedPageSentenceRejected,
  AdminSimplifiedPageSentenceVerified,
  AdminSimplifiedPageUndoRejectionButton,
  AdminSimplifiedSentences,
  DataNotFound,
  ErrorRetrievingData,
  PageNotFound
} from '@/lang'
import styles from '@/styles/Home.module.css'
import { Query, Sentence, SimplifiedSentence, SimplifiedSentences } from '@/types'
import Cookies from 'js-cookie'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/**
 * Frá admin, Eyðir einfaldri setningu
 */
const adminDeleteSimplifiedSentenceHandler = async (
  event: any, token: any, sentenceId: number
): Promise<object> => {
  event.preventDefault();

  let res;
  try {
    res = await fetch(`${baseUrl}/admin/sentences/simplified/${sentenceId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch(e: any) {
    console.error('Error:', e.message)
    throw new Error(e || 'Unknown error');
  }
  
  if (res && !res.ok) {
    console.error('Error:', res.status, res.statusText);
    const message = await res.json();
    console.error(message.error)
    throw new Error(message.error || 'Unknown error');
  }

  const result = await res.json();

  return result;
};

/**
 * Frá admin, Afkallar höfnun á einfaldri setningu
 */
const adminUndoSimplifiedRejectionHandler = async (
  event: any, token: any, sentenceId: number
): Promise<Sentence> => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('rejected', 'false');

  let res;
  try {
    res = await fetch(`${baseUrl}/admin/sentences/simplified/${sentenceId}/undo`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });    
  } catch(e: any) {
    console.error('Error:', e.message)
    throw new Error(e || 'Unknown error');
  }
  
  if (res && !res.ok) {
    console.error('Error:', res.status, res.statusText);
    const message = await res.json();
    console.error(message.error)
    throw new Error(message.error || 'Unknown error');
  }

  const result = await res.json();

  return result;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  let off = '';
  if(query.offset) {
    off = `offset=${query.offset}`;
  }
  let lim = '';
  if(query.limit) {
    lim = `limit=${query.limit}`;
  }

  let res;
  try {
    res = await fetch(`${baseUrl}/admin/sentences/simplified/?${off}&${lim}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${context.req.cookies.token}`,
      },
    });
  } catch(e: any) {
    console.error('Error:', e.message)
    return {
      props: { errorMessage: e.message || 'unknown error'},
    };
  }

  if (res && !res.ok) {
    console.error('Error:', res.status, res.statusText);
    const message = await res.json();
    console.error(message.error)

    return {
      props: { errorMessage: message.error || 'unknown error'},
    };
  }

  const simplifiedSentences = await res.json();
  
  if (!simplifiedSentences) {
    return {
      props: {},
    };
  }

  return {
    props: { query, simplifiedSentences },
  }
}

export default function SimplifiedSentencesPage(
  { query, simplifiedSentences, errorMessage }: 
  { query: Query, simplifiedSentences: SimplifiedSentences, errorMessage: any }
) {
  const router = useRouter();
  const [token, setToken] = useState('');
  const loginContext = useUserContext();
  const [error, setError] = useState(null);

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';


  useEffect(() => {
    const checkLogin = async () => {
      const {user} = loginContext.userLoggedIn;

      if(user !== undefined){
        const cookieToken = Cookies.get('token');
        if(cookieToken) setToken(cookieToken);
      }
    }
    checkLogin();
  }, [loginContext, router])

  if(errorMessage && errorMessage !== error) {
    setError(errorMessage);
  }

  if (!simplifiedSentences) {
    return (
      <>
        <Head>
          <title>{AdminSimplifiedSentences[language]}</title>
          {/* <meta name="description" content="Setningarsöfnun" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8"></meta>
          <link rel="icon" href="/mlogo.png" />
        </Head>
        <main className={styles.main}>
          <div className={styles.notFound}>
            {error ? <h1>{error}</h1> : <h1>{ErrorRetrievingData[language]}</h1>}
          </div>
        </main>
      </>
    )
  }

  if (!simplifiedSentences.simplifiedSentences || simplifiedSentences.simplifiedSentences.length === 0) {
    return (
      <main className={styles.main}>
        {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
            <div className={styles.notFound}>
              <h1>{DataNotFound[language]}</h1>
            </div>
          ) : (
            <div className={styles.notFound}>
              <h1>{PageNotFound[language]}</h1>
            </div>
          )
        }
      </main> 
    )
  }

  return (
    <>
      <Head>
        <title>{AdminSimplifiedSentences[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={styles.main}>

          <div className={styles.cards}>
            <div className={styles.adminSentences}>
                {simplifiedSentences.simplifiedSentences.map((value: SimplifiedSentence) => (
                  <div className={styles.card} key={value.id} >

                    <SentenceCard value={value.simplifiedsentence} ></SentenceCard>

                    {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
                      <>
                        {value.rejected ? 
                          (<p>{AdminSimplifiedPageSentenceRejected[language]}</p>) 
                          : 
                          (<p>{AdminSimplifiedPageSentenceNotRejected[language]}</p>)
                        }
                        {value.verified ? 
                          (<p>{AdminSimplifiedPageSentenceVerified[language]}</p>) 
                          : 
                          (<p>{AdminSimplifiedPageSentenceNotVerified[language]}</p>)
                        }
                        <div className={styles.adminSimplifiedButtons}>
                          <Button onClick={async (event: any) => {
                            try {
                              await adminUndoSimplifiedRejectionHandler(
                                event,
                                token, 
                                value.id
                              );
                              router.reload();
                            } catch(e: any) {
                              setError(e.message);
                            }
                          }}>
                            {AdminSimplifiedPageUndoRejectionButton[language]}
                          </Button>

                          <Button onClick={async (event: any) => {
                            try {
                              await adminDeleteSimplifiedSentenceHandler(
                                event,
                                token, 
                                value.id
                              );
                              router.reload();                              
                            } catch(e: any) {
                              setError(e.message);
                            }
                          }}>
                            {AdminSimplifiedPageDeleteSentenceButton[language]}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className={styles.notFound}>
                        <h1>{PageNotFound[language]}</h1>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

            {!(simplifiedSentences.simplifiedSentences.length < 10 
            && (query.offset === 0 || query.offset === undefined)) ? (
              <div className='paging'>
                <Paging paging={simplifiedSentences} query={query} page={'sentences/simplified'}></Paging>
              </div>
            ) : null}

      </main>
    </>
  )
}
