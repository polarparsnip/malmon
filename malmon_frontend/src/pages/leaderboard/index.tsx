import Leaderboard from '@/components/Leaderboard/Leaderboard'
import Paging from '@/components/paging/Paging'
import { useUserContext } from '@/context'
import { DataNotFound, ErrorRetrievingData, PageNotFound, ScoretablePageTitle } from '@/lang'
import styles from '@/styles/Home.module.css'
import { Query, Users } from '@/types'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

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
    res = await fetch(`${baseUrl}/users/?order=leaderboard&${off}&${lim}`, {
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

  const users = await res.json();

  if (!users) {
    return {
      props: {},
    };
  }

  return {
    props: { query, users },
  }
}

export default function LeaderboardPage(
  { query, users, errorMessage }: { query: Query, users: Users, errorMessage: any }
) {
  const loginContext = useUserContext();
  const [error, setError] = useState(null);

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';


  if(errorMessage && errorMessage !== error) {
    setError(errorMessage);
  }

  if (!users) {
    return (
      <>
        <Head>
          <title>{ScoretablePageTitle[language]}</title>
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

  if (!users.users || users.users.length === 0) {
    return (
      <main className={styles.main}>
        {loginContext.userLoggedIn.login ? (
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
        <title>{ScoretablePageTitle[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={styles.main}>

          <div className={styles.cards}>

            <div className={styles.leaderboard}>
              <Leaderboard users={users} />

              {!(users.users.length < 10 && (query.offset === 0 || query.offset === undefined)) ? (
                <div className='paging'>
                  <Paging paging={users} query={query} page={'users'}></Paging>
                </div>
              ) : null}

            </div>
          </div>
          
      </main>
    </>
  )
}
