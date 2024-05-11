import { useUserContext } from '@/context'
import {
  AccountPageTitle,
  AdminSimplifiedSentences,
  AdminUsersListPageTitle,
  PageNotFound,
  Sentences,
  UploadPageTitle
} from '@/lang'
import styles from '@/styles/Home.module.css'
import Cookies from 'js-cookie'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const [token, setToken] = useState('');
  const loginContext = useUserContext();

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

  return (
    <>
      <Head>
        <title>Admin</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
            <div className={styles.adminEditor}>
              <h1>Admin</h1>

              <h3><Link href='/account'>{AccountPageTitle[language]}</Link></h3>

              <h3><Link href='/sentences'>{Sentences[language]}</Link></h3>
    
              <h3><Link href='/sentences/simplified'>{AdminSimplifiedSentences[language]}</Link></h3>

              <h3><Link href='/users'>{AdminUsersListPageTitle[language]}</Link></h3>

              <h3><Link href='/upload'>{UploadPageTitle[language]}</Link></h3>

            </div>
          ) :             
            <div className={styles.notFound}>
              <h1>{PageNotFound[language]}</h1>
            </div>
          }
        </div>
      </main>
    </>
  )
}
