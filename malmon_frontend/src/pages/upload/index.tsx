import { Button } from '@/components/Button/Button'
import { useUserContext } from '@/context'
import { PageNotFound, UploadPageInstructions, UploadPageSubmitButton, UploadPageSubmitLabel, UploadPageSuccess, UploadPageTitle } from '@/lang'
import styles from '@/styles/Home.module.css'
import Cookies from 'js-cookie'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';


const adminRegisterBulkSentencesHandler = async (event: any, token: any): Promise<any> => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('csvFile', event.target.sentencesFile.files[0]);
  
  let res;
  try {
    res = await fetch(`${baseUrl}/admin/sentences/bulk`, {
      method: 'POST',
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


export default function AdminUpload() {

  const router = useRouter();
  const [token, setToken] = useState('');
  const loginContext = useUserContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


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

  return (
    <>
      <Head>
        <title>{UploadPageTitle[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.uploadContent}>
            {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
              <div className={styles.postForm}>


                <form className={styles.form}
                  onSubmit={async (event) => {
                    event.preventDefault();

                    try {
                      await adminRegisterBulkSentencesHandler(event, token);
                      setSuccess(true);
                    } catch(e: any) {
                      setSuccess(false);
                      setError(e.error);
                    }
                  }}
                >
                  <label htmlFor='sentencesFile'><h1>{UploadPageSubmitLabel[language]}</h1></label>
                  <br />
                  <input className={styles.fileInput} type='file' id='sentencesFile' />
                  <br />
                  <Button type='submit'>{UploadPageSubmitButton[language]}</Button>

                  {success && <h3>{UploadPageSuccess[language]}</h3>}
                  {error && <h3>{error}</h3>}


                  <p>{UploadPageInstructions[language]}</p>
                  <p>sentence</p>
                  <p>example 1</p>
                  <p>example 2</p>
                  <p>...</p>
                  <p>example n</p>

                </form>
              </div>
            ) : 
              <div className={styles.notFound}>
                <h1>{PageNotFound[language]}</h1>
              </div>
            }

          </div>
        </div>
      </main>
    </>
  )
}
