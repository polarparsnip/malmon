import { FaqPageText } from '@/lang'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

export default function FaqPage() {

  return (
    <>
      <Head>
        <title>FAQ</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.indexInfo}>
            
            <h1>FAQ</h1>

          {FaqPageText[language] && FaqPageText[language].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          </div>
        </div>
      </main>
    </>
  )
}
