import { Button } from '@/components/Button/Button'
import { getData } from '@/csv_downloader.js'
import {
  DownloadPageDownloadCsv,
  DownloadPageDownloadJson,
  DownloadPageDownloadLabel,
  DownloadPageTitle
} from '@/lang'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function DownloadPage() {

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

  return (
    <>
      <Head>
        <title>{DownloadPageTitle[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.downloadContainer}>

            <p>{DownloadPageDownloadLabel[language]}</p>

            <Button onClick={async () => {
                const downloadData = await getData('json');
                if (downloadData === undefined) {
                  console.error( {error: 'Could not download sentence data'});
                }
            }}>
              {DownloadPageDownloadJson[language]}
            </Button>

            <Button onClick={async () => {
                const downloadData = await getData('csv');
                if (downloadData === undefined) {
                  console.error( {error: 'Could not download sentence data'});
                }
            }}>
              {DownloadPageDownloadCsv[language]}
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
