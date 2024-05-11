import { IndexPageText, IndexPageTitle, IndexPageWelcome } from '@/lang'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

export default function Home() {

  return (
    <>
      <Head>
        <title>{IndexPageTitle[language]}</title>
        {/* <meta name="description" content="Setningarsöfnun" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mlogo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.indexInfo}>
            <h1>{IndexPageWelcome[language]}</h1>

            {/* <p>Þessi vefsíða er til að safna hlaða og niður gögnum sem hægt er að nýta til frekari 
              rannsókna og þróunar á gervigreindar mállíkunum.
            </p>
            <p>Þessi gögn eru á formi einfaldaðra setninga frá notendum sem eru gerðar útfrá
              flóknari setningum sem koma frá mismunandi stöðum eins og fréttasíðum osf.
            </p>
            <p>Síðan er með einfalt viðmót sem auðvelt er að nota.
            </p> 
            <p>Til að hlaða niður þeim gögnum sem komin eru hingað til er hægt að smella 
              á <Link href='/download'>&quot;Gögn&quot;</Link> fyrir ofan í valmyndinni
            </p> 
            <p>Til að leggja fram aðstoð og einfalda setningar þarf einfaldlega bara
              að skrá sig inn og smella á <Link href='/simplify'>&quot;Einfalda&quot;</Link> í 
              valmyndinni. Þá birtist flókin setning
              og textareitur sem hægt að skrifa inn í. Dragðu myndina til vinstri yfir í boxið til hægri
              og skrifaðu svo einfaldari útgáfu af setningunni.
              í textareitin og smelltu á &quot;Senda inn&quot; til að senda inn einfölduðu setninguna.
            </p>
            <p>Innsendar setningar þurfa svo að vera staðfestar af öðrum notendum til að komast inn í
              gagnasettið. Til að yfirfara setningar frá öðrum skaltu smella 
              á <Link href='/verify'>&quot;Yfirfara&quot;</Link> í 
              valmyndinni. Þá færðu upp setningu og einfalda útgáfu af henni sem var send inn af öðrum 
              notanda. Dragðu aftur myndina til vinstri yfir í boxið til hægri og eftir að 5 sekúndur 
              hafa liðið síðan setningin birtist kemur upp takki sem hægt er að ýta á til að staðfesta
              að einfalda setningin sé nógu góð einföldun. Það er svo líka takki til að hafna setningunni 
              ef að þér finnst hún ekki nógu góð útgáfa af upprunalegu setningunni.
            </p>
            <p>Inn í <Link href='/account'>&quot;Aðgangur&quot;</Link> í valmyndinni er svo hægt að sjá 
            upplýsingarnar þínar, eins og fjölda innsendra einfaldaðra setninga og fjölda yfirfarða 
            setninga. Það birtist líka gæludýr sem þróast með árangri þínum.
            </p>
            <p>Svo ef smellt er á <Link href='/account'>&quot;Stigatafla&quot;</Link> í valmyndinni er 
            hægt að skoða hverjir hafa lagt mest af mörkum og sent inn mest af setningum og klárað sem 
            flestar yfirferðir.
            </p>
            <p>Ef þú ert ekki með notanda aðgang er einfalt að búa einn til. Smelltu annaðhvort 
            á <Link href='/register'>&quot;Nýskráning&quot;</Link> á innskráningarsíðunni eða fyrir neðan í 
            fótnum. Þar þarf svo einfaldlega
            bara að gefa upp nafn og notandanafn ásamt lykilorð. Eftir það er svo hægt 
            að <Link href='/login'>skrá sig inn</Link> og taka þátt.
            </p> */}

          {IndexPageText[language] && IndexPageText[language].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          </div>
        </div>
      </main>
    </>
  )
}
