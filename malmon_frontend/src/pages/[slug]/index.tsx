import { PageNotFound } from '@/lang';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function NotFoundPage() {

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

  return (
    <>
      <Head>
        <title>{PageNotFound[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={styles.main}>

        <div className={styles.notFound} >
          <h1>{PageNotFound[language]}</h1>
        </div>
        
      </main>
    </>
  )
}
