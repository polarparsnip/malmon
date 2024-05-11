/* eslint-disable quotes */

interface LanguageEnums {
  [key: string]: string;
}

interface LanguageEnumsLongText {
  [key: string]: string[];
}

export const ErrorRetrievingData: LanguageEnums = {
  ENG: "Not able to fetch data.",
  ICE: "Ekki tókst að sækja gögn.",
  NOR: "Klarte ikke å hente data.",
  SWE: "Kunde inte hämta data.",
  DAN: "Kunne ikke hente data.",
  FAR: "Tað tókst ikki at sækja data.",
  ITA: "Non è stato possibile recuperare i dati."
};

export const DataNotFound: LanguageEnums = {
  ENG: "No data found.",
  ICE: "Engin gögn fundust.",
  NOR: "Ingen data funnet.",
  SWE: "Ingen data hittades.",
  DAN: "Ingen data fundet.",
  FAR: "Ongin data funnin.",
  ITA: "Nessun dato trovato."
};

export const PageNotFound: LanguageEnums = {
  ENG: "Page not found.",
  ICE: "Síða fannst ekki.",
  NOR: "Side ikke funnet.",
  SWE: "Sida hittades inte.",
  DAN: "Side ikke fundet.",
  FAR: "Síða ikki funnin.",
  ITA: "Pagina non trovata."
};

export const HeaderDownloadDataLink: LanguageEnums = {
  ENG: "Data",
  ICE: "Gögn",
  NOR: "Data",
  SWE: "Data",
  DAN: "Data",
  FAR: "Data",
  ITA: "Dati"
};

export const HeaderScoreTableLink: LanguageEnums = {
  ENG: "Scoreboard",
  ICE: "Stigatafla",
  NOR: "Resultattavle",
  SWE: "Resultattabell",
  DAN: "Resultattavle",
  FAR: "Talvuskeða",
  ITA: "Tabellone dei punteggi"
};

export const HeaderSimplifyLink: LanguageEnums = {
  ENG: "Simplify",
  ICE: "Einfalda",
  NOR: "Forenkle",
  SWE: "Förenkla",
  DAN: "Forenkle",
  FAR: "Einfalda",
  ITA: "Semplificare"
};

export const HeaderVerifyLink: LanguageEnums = {
  ENG: "Verify",
  ICE: "Yfirferð",
  NOR: "Bekreft",
  SWE: "Bekräfta",
  DAN: "Bekræft",
  FAR: "Staðfest",
  ITA: "Verificare"
};

export const HeaderAccountLink: LanguageEnums = {
  ENG: "Account",
  ICE: "Aðgangur",
  NOR: "Konto",
  SWE: "Konto",
  DAN: "Konto",
  FAR: "Konta",
  ITA: "Account"
};

export const Sentence: LanguageEnums = {
  ENG: "Sentence",
  ICE: "Setning",
  NOR: "Setning",
  SWE: "Mening",
  DAN: "Sætning",
  FAR: "Setning",
  ITA: "Frase"
};

export const Username: LanguageEnums = {
  ENG: "Username:",
  ICE: "Notendanafn:",
  NOR: "Brukernavn:",
  SWE: "Användarnamn:",
  DAN: "Brugernavn:",
  FAR: "Brúkaranavn:",
  ITA: "Nome utente:"
};

export const Password: LanguageEnums = {
  ENG: "Password:",
  ICE: "Lykilorð:",
  NOR: "Passord:",
  SWE: "Lösenord:",
  DAN: "Adgangskode:",
  FAR: "Lyklaorð:",
  ITA: "parola d'ordine:"
};

export const SigninLink: LanguageEnums = {
  ENG: "Log in",
  ICE: "Innskráning",
  NOR: "Logg inn",
  SWE: "Logga in",
  DAN: "Log ind",
  FAR: "Vátta teg inn",
  ITA: "Accedi"
};

export const RegisterLink: LanguageEnums = {
  ENG: "Create account",
  ICE: "Nýskráning",
  NOR: "Registrer konto",
  SWE: "Skapa konto",
  DAN: "Opret konto",
  FAR: "Skráðu konto",
  ITA: "Registrare un account"
};

export const SignOutLink: LanguageEnums = {
  ENG: "Log out",
  ICE: "Útskráning",
  NOR: "Logg ut",
  SWE: "Logga ut",
  DAN: "Log ud",
  FAR: "Vátta teg út",
  ITA: "Disconnettersi"
};

export const LoggedInAs: LanguageEnums = {
  ENG: "Logged in as:",
  ICE: "Skráður inn sem:",
  NOR: "Logget inn som:",
  SWE: "Inloggad som:",
  DAN: "Logget ind som:",
  FAR: "Váttaður inn sum:",
  ITA: "Loggato come:"
};

export const IndexPageTitle: LanguageEnums = {
  ENG: "Frontpage",
  ICE: "Forsíða",
  NOR: "Forside",
  SWE: "Framsida",
  DAN: "Forside",
  FAR: "Forsíða",
  ITA: "Prima pagina"
};

export const DownloadPageTitle: LanguageEnums = {
  ENG: "Download",
  ICE: "Niðurhal",
  NOR: "Nedlasting",
  SWE: "Nedladdning",
  DAN: "Download",
  FAR: "Niðurlesing",
  ITA: "Download"
};

export const DownloadPageDownloadLabel: LanguageEnums = {
  ENG: "Download dataset:",
  ICE: "Hlaða gögnum:",
  NOR: "Last ned datasett:",
  SWE: "Ladda ner dataset:",
  DAN: "Download datasæt:",
  FAR: "Les niður data:",
  ITA: "Scarica il dataset:"
};

export const DownloadPageDownloadJson: LanguageEnums = {
  ENG: "Download dataset as JSON:",
  ICE: "Hlaða gögnum sem JSON:",
  NOR: "Last ned datasett som JSON:",
  SWE: "Ladda ner dataset som JSON:",
  DAN: "Download datasæt som JSON:",
  FAR: "Les niður data sum JSON:",
  ITA: "Scarica il dataset in formato JSON:"
};

export const DownloadPageDownloadCsv: LanguageEnums = {
  ENG: "Download dataset as CSV:",
  ICE: "Hlaða gögnum sem CSV:",
  NOR: "Last ned datasett som CSV:",
  SWE: "Ladda ner dataset som CSV:",
  DAN: "Download datasæt som CSV:",
  FAR: "Les niður data sum CSV:",
  ITA: "Scarica il dataset in formato CSV:"
};

export const ScoretablePageTitle: LanguageEnums = {
  ENG: "Scoreboard",
  ICE: "Stigatafla",
  NOR: "Resultattavle",
  SWE: "Resultattabell",
  DAN: "Resultattavle",
  FAR: "Talvuskeða",
  ITA: "Tabellone dei punteggi"
};

export const Email: LanguageEnums = {
  ENG: "Email",
  ICE: "Netfang",
  NOR: "E-post",
  SWE: "E-post",
  DAN: "E-mail",
  FAR: "Teldupostur",
  ITA: "Email"
};

export const Sentences: LanguageEnums = {
  ENG: "Sentences",
  ICE: "Setningar",
  NOR: "Setninger",
  SWE: "Meningar",
  DAN: "Sætninger",
  FAR: "Setningar",
  ITA: "Frasi"
};

export const Verifications: LanguageEnums = {
  ENG: "Verifications",
  ICE: "Yfirferðir",
  NOR: "Verifiseringer",
  SWE: "Verifieringar",
  DAN: "Verifikationer",
  FAR: "Staðfestingar",
  ITA: "Verifiche"
};

export const SimplifySentencesPageTitle: LanguageEnums = {
  ENG: "Simplify sentences",
  ICE: "Einfalda Setningar",
  NOR: "Forenkle setninger",
  SWE: "Förenkla meningar",
  DAN: "Forenkle sætninger",
  FAR: "Einfalda setningar",
  ITA: "Semplificare le frasi"
};

export const SimplifyPageDragPhoto: LanguageEnums = {
  ENG: "Drag the image to the left into the box",
  ICE: "Dragðu myndina til vinstri yfir í boxið",
  NOR: "Dra bildet til venstre inn i boksen",
  SWE: "Dra bilden till vänster in i rutan",
  DAN: "Træk billedet til venstre ind i boksen",
  FAR: "Drag myndina til vinstru inn í kassan",
  ITA: "Trascina l'immagine a sinistra nella scatola"
};

export const SimplifyPageSubmitLabel: LanguageEnums = {
  ENG: "Simplify:",
  ICE: "Einfalda:",
  NOR: "Forenkle",
  SWE: "Förenkla",
  DAN: "Forenkle",
  FAR: "Einfalda",
  ITA: "Semplificare"
};

export const SimplifyPageInputPlaceholder: LanguageEnums = {
  ENG: "Simplify sentence",
  ICE: "Einfalda Setningu",
  NOR: "Forenkle setning",
  SWE: "Förenkla mening",
  DAN: "Forenkle sætning",
  FAR: "Einfalda setning",
  ITA: "Semplificare la frase"
};

export const SimplifyPageSubmitButton: LanguageEnums = {
  ENG: "Submit",
  ICE: "Senda inn",
  NOR: "Send inn",
  SWE: "Skicka",
  DAN: "Indsend",
  FAR: "Send",
  ITA: "Inviare"
};

export const VerifySentencesPageTitle: LanguageEnums = {
  ENG: "Verify sentences",
  ICE: "Staðfesta Setningar",
  NOR: "Bekreft setninger",
  SWE: "Verifiera meningar",
  DAN: "Bekræfte sætninger",
  FAR: "Staðfesta setningar",
  ITA: "Verifica frasi"
};

export const VerifySentencesPageOriginal: LanguageEnums = {
  ENG: "Original sentence:",
  ICE: "Upprunaleg setning:",
  NOR: "Opprinnelig setning:",
  SWE: "Ursprunglig mening:",
  DAN: "Oprindelig sætning:",
  FAR: "Upprunaliga setning:",
  ITA: "Frase originale:"
};

export const VerifySentencesPageSimplified: LanguageEnums = {
  ENG: "Simplified sentence:",
  ICE: "Einfölduð setning:",
  NOR: "Forenklet setning:",
  SWE: "Förenklad mening:",
  DAN: "Forenklet sætning:",
  FAR: "Einføld setning:",
  ITA: "Frase semplificata:"
};

export const VerifySentencesPageConfirm: LanguageEnums = {
  ENG: "Confirm sentence",
  ICE: "Staðfesta setningu",
  NOR: "Bekreft setning",
  SWE: "Bekräfta mening",
  DAN: "Bekræft sætning",
  FAR: "Staðfest setning",
  ITA: "Conferma frase"
};

export const VerifySentencesPageReject: LanguageEnums = {
  ENG: "Reject sentence",
  ICE: "Hafna setningu",
  NOR: "Avvis setning",
  SWE: "Avvisa mening",
  DAN: "Afvis sætning",
  FAR: "Syna burtur setning",
  ITA: "Rifiuta frase"
};

export const AccountPageTitle: LanguageEnums = {
  ENG: "Account",
  ICE: "Aðgangur",
  NOR: "Konto",
  SWE: "Konto",
  DAN: "Konto",
  FAR: "Konta",
  ITA: "Account"
};

export const AdminUsersListPageTitle: LanguageEnums = {
  ENG: "Users",
  ICE: "Notendur",
  NOR: "Brukere",
  SWE: "Användare",
  DAN: "Brugere",
  FAR: "Brúkarar",
  ITA: "Utenti"
};

export const AdminUsersListPageDeleteUser: LanguageEnums = {
  ENG: "Delete user",
  ICE: "Eyða notenda",
  NOR: "Slett bruker",
  SWE: "Ta bort användare",
  DAN: "Slet bruger",
  FAR: "Strika brúkara",
  ITA: "Elimina utente"
};

export const AdminSentencesPageTitle: LanguageEnums = {
  ENG: "Sentences",
  ICE: "Setningar",
  NOR: "Setninger",
  SWE: "Meningar",
  DAN: "Sætninger",
  FAR: "Setningar",
  ITA: "Frasi"
};

export const AdminSentencesPageHasBeenSimplified: LanguageEnums = {
  ENG: "Has been simplified",
  ICE: "Hefur verið einfölduð",
  NOR: "Har blitt forenklet",
  SWE: "Har förenklats",
  DAN: "Er blevet forenklet",
  FAR: "Hevur verið forenklað",
  ITA: "È stato semplificato"
};

export const AdminSentencesPageHasNotBeenSimplified: LanguageEnums = {
  ENG: "Has not been simplified",
  ICE: "Hefur ekki verið einfölduð",
  NOR: "Har ikke blitt forenklet",
  SWE: "Har inte förenklats",
  DAN: "Er ikke blevet forenklet",
  FAR: "Hevur ikki verið forenklað",
  ITA: "Non è stato semplificato"
};

export const AdminSentencesPageUpdateSentenceButton: LanguageEnums = {
  ENG: "Update sentence",
  ICE: "Uppfæra Setningu",
  NOR: "Oppdater setning",
  SWE: "Uppdatera mening",
  DAN: "Opdater sætning",
  FAR: "Uppdater setning",
  ITA: "Aggiorna frase"
};

export const AdminSentencesPageDeleteSentenceButton: LanguageEnums = {
  ENG: "Delete sentence",
  ICE: "Eyða Setningu",
  NOR: "Slett setning",
  SWE: "Ta bort mening",
  DAN: "Slet sætning",
  FAR: "Strika setning",
  ITA: "Cancella frase"
};

export const AdminSentencesPageAddSentence: LanguageEnums = {
  ENG: "Add sentence",
  ICE: "Bæta við setningu",
  NOR: "Legg til setning",
  SWE: "Lägg till mening",
  DAN: "Tilføj sætning",
  FAR: "Legg til setning",
  ITA: "Aggiungi frase"
};


export const AdminSimplifiedSentences: LanguageEnums = {
  ENG: "Simplified sentences",
  ICE: "Einfaldaðar Setningar",
  NOR: "Forenklede setninger",
  SWE: "Förenklade meningar",
  DAN: "Forenklede sætninger",
  FAR: "Forenklaðar setningar",
  ITA: "Frasi semplificate"
};

export const AdminSimplifiedPageSentenceRejected: LanguageEnums = {
  ENG: "Has been rejected",
  ICE: "Hefur verið hafnað",
  NOR: "Har blitt avvist",
  SWE: "Har blivit avvisad",
  DAN: "Er blevet afvist",
  FAR: "Hevur verið avbrota",
  ITA: "È stato respinto"
};

export const AdminSimplifiedPageSentenceNotRejected: LanguageEnums = {
  ENG: "Has not been rejected",
  ICE: "Hefur ekki verið hafnað",
  NOR: "Har ikke blitt avvist",
  SWE: "Har inte blivit avvisad",
  DAN: "Er ikke blevet afvist",
  FAR: "Hevur ikki verið avbrota",
  ITA: "Non è stato respinto"
};

export const AdminSimplifiedPageSentenceVerified: LanguageEnums = {
  ENG: "Has been verified",
  ICE: "Hefur verið staðfest",
  NOR: "Har blitt verifisert",
  SWE: "Har blivit verifierad",
  DAN: "Er blevet verificeret",
  FAR: "Hevur verið váttað",
  ITA: "È stato verificato"
};

export const AdminSimplifiedPageSentenceNotVerified: LanguageEnums = {
  ENG: "Has not been verified",
  ICE: "Hefur ekki verið staðfest",
  NOR: "Har ikke blitt verifisert",
  SWE: "Har inte blivit verifierad",
  DAN: "Er ikke blevet verificeret",
  FAR: "Hevur ikki verið váttað",
  ITA: "Non è stato verificato"
};

export const AdminSimplifiedPageUndoRejectionButton: LanguageEnums = {
  ENG: "Undo rejection",
  ICE: "Eyða höfnun",
  NOR: "Angre avvisning",
  SWE: "Ångra avvisning",
  DAN: "Fortryd afvisning",
  FAR: "Upprita avbrota",
  ITA: "Annulla il rifiuto"
};

export const AdminSimplifiedPageDeleteSentenceButton: LanguageEnums = {
  ENG: "Delete sentence",
  ICE: "Eyða setningu",
  NOR: "Slett setning",
  SWE: "Ta bort mening",
  DAN: "Slet sætning",
  FAR: "Strika setning",
  ITA: "Cancella frase"
};

export const UserCreated: LanguageEnums = {
  ENG: "User created at",
  ICE: "Notandi búinn til þann",
  NOR: "Bruker opprettet",
  SWE: "Användare skapad",
  DAN: "Bruger oprettet",
  FAR: "Brúkarin skapti",
  ITA: "Utente creato"
};

export const UploadPageTitle: LanguageEnums = {
  ENG: "Upload Sentences",
  ICE: "Hlaða inn setningum",
  NOR: "Last opp setninger",
  SWE: "Ladda upp meningar",
  DAN: "Upload sætninger",
  FAR: "Upprita setningar",
  ITA: "Carica frasi"
};

export const UploadPageSubmitLabel: LanguageEnums = {
  ENG: "Add sentences through CSV file",
  ICE: "Bæta við setningum í gegnum CSV skjal",
  NOR: "Legg til setninger via CSV-fil",
  SWE: "Lägg till meningar via CSV-fil",
  DAN: "Tilføj sætninger gennem CSV-fil",
  FAR: "Legg til setningar via CSV-fílu",
  ITA: "Aggiungi frasi tramite file CSV"
};

export const UploadPageSubmitButton: LanguageEnums = {
  ENG: "Submit sentences file",
  ICE: "Senda inn setningar skjal",
  NOR: "Send inn setningsfil",
  SWE: "Skicka in meningar fil",
  DAN: "Indsend sætninger fil",
  FAR: "Innsenda setning fíla",
  ITA: "Invia file di frasi"
};

export const UploadPageInstructions: LanguageEnums = {
  ENG: `Please put "sentence" as the head in the CSV file with each sentence 
        below as a separate row. Example:`,
  ICE: `Setjið "sentence" sem haus CSV skránnar með hverja setningu fyrir neðan í sinni eigin röð. Dæmi:`,
  NOR: `Vennligst sett "sentence" som overskrift i CSV-filen med hver setning nedenfor som en 
        separat rad. Eksempel:`,
  SWE: `Var god och sätt "sentence" som rubrik i CSV-filen med varje mening nedan som en separat rad. 
        Exempel:`,
  DAN: `Venligst sæt "sentence" som overskrift i CSV-filen med hver sætning nedenfor som en 
        separat række. Eksempel:`,
  FAR: `Vinarliga set "sentence" sum yvirskrift í CSV-fíluni við hvørri setning niðanfyri sum ein 
        sjálvstøðug røð. Dømi:`,
  ITA: `Si prega di mettere la "sentence" come intestazione nel file CSV con ogni frase sotto come 
        riga separata. Esempio:`
};

export const UploadPageSuccess: LanguageEnums = {
  ENG: "Upload successful!",
  ICE: "Tókst að senda skjal!",
  NOR: "Opplasting vellykket!",
  SWE: "Uppladdning lyckades!",
  DAN: "Upload vellykket!",
  FAR: "Uppritað eydnast!",
  ITA: "Caricamento riuscito!"
};


export const IndexPageWelcome: LanguageEnums = {
  ENG: "Welcome",
  ICE: "Velkomin",
  NOR: "Velkommen",
  SWE: "Välkommen",
  DAN: "Velkommen",
  FAR: "Vælkomin",
  ITA: "Benvenuto"
};

export const IndexPageText: LanguageEnumsLongText = {
  ENG: [
    `This website is for collecting, loading, and downloading data that can be used for further research 
    and development on machine learning language models.`,

    `The data is in the form of simplified sentences from users, which are generated from more complex sentences 
    coming from various sources such as news websites, etc.`,

    `The site has a simple interface that is easy to use.`,

    `To download the data that has been collected so far, you can click on "Data" above in the menu.`,

    `To contribute and simplify sentences, you simply need to log in and click on "Simplify" in the menu. 
    Then a complex sentence and a text field will appear where you can write a simpler version of the 
    sentence. Drag the small image icon on the left over to the box on the right and then write a 
    simpler version of the provided sentence that you can think of into the text field and 
    click "Submit" to submit the simplified sentence when you are done.`,

    `Submitted sentences need to be confirmed by other users to be included in the dataset. 
    To review sentences from others, click on "Verify" in the menu. Then you'll see an original complex
    sentence and a simplified version of it that was submitted by another user. Drag the small image icon 
    on the left over to the box on the right and a button will appear to confirm that the simplified 
    sentence is a good enough simplification of the original sentence. There is also a button to 
    reject the sentence if you don't think it's a good enough version of the original sentence.`,

    `In the "Account" section of the menu, you can see your information, such as the number of submitted 
    simplified sentences and the number of verified sentences. A digital pet also appears that evolves 
    with your progress and sentence contributions. Then, if you click on "Scoreboard" in the menu, 
    you can see which user has submitted the most sentences and completed the most verifications.`,

    `If you don't have a user account, it's easy to create one. Simply either click on "Sign up" 
    on the login page or below in the footer. There you simply need to enter your email
    and then create a username and password. After that, you can log in and participate.`
  ],

  ICE: [
    `Þessi vefsíða er til að safna hlaða og niður gögnum sem hægt er að nýta til frekari rannsókna 
    og þróunar á gervigreindar mállíkunum.`,

    `Þessi gögn eru á formi einfaldaðra setninga frá notendum sem eru gerðar útfrá flóknari setningum 
    sem koma frá mismunandi stöðum eins og fréttasíðum osf.`,

    `Síðan er með einfalt viðmót sem auðvelt er að nota.`,

    `Til að hlaða niður þeim gögnum sem komin eru hingað til er hægt að smella á "Gögn" fyrir 
    ofan í valmyndinni.`,

    `Til að leggja fram aðstoð og einfalda setningar þarf einfaldlega bara að skrá sig inn og smella 
    á "Einfalda" í valmyndinni. Þá birtist flókin setning og 
    textareitur sem hægt að skrifa inn í. Dragðu myndina til vinstri yfir í boxið til hægri og skrifaðu 
    svo einfaldari útgáfu af setningunni. í textareitin og smelltu á "Senda inn" til að senda 
    inn einfölduðu setninguna.`,

    `Innsendar setningar þurfa svo að vera staðfestar af öðrum notendum til að komast inn í gagnasettið. 
    Til að yfirfara setningar frá öðrum skaltu smella á "Yfirfara" í valmyndinni. Þá færðu upp 
    setningu og einfalda útgáfu af henni sem var send inn af öðrum notanda. 
    Dragðu aftur myndina til vinstri yfir í boxið til hægri og eftir að 5 sekúndur hafa liðið síðan 
    setningin birtist kemur upp takki sem hægt er að ýta á til að staðfesta að einfalda setningin sé 
    nógu góð einföldun. Það er svo líka takki til að hafna setningunni ef að þér finnst hún ekki nógu 
    góð útgáfa af upprunalegu setningunni.`,

    `Inn í "Aðgangur" svæðinu í valmyndinni er svo hægt að sjá upplýsingarnar 
    þínar, eins og fjölda innsendra einfaldaðra setninga og fjölda yfirfarða setninga. 
    Það birtist líka gæludýr sem þróast með árangri þínum.
    Svo ef smellt er á "Stigatafla" í valmyndinni er hægt að skoða hverjir hafa lagt 
    mest af mörkum og sent inn mest af setningum og klárað sem flestar yfirferðir.`,

    `Ef þú ert ekki með notanda aðgang er einfalt að búa einn til. Smelltu annaðhvort á 
    "Nýskráning" á innskráningarsíðunni eða fyrir neðan í fótnum. Þar þarf svo einfaldlega að 
    gefa upp netfang og búa til notandanafn og lykilorð. 
    Eftir það er svo hægt að skrá sig inn og taka þátt.`
  ],

  NOR: [`Forside`],

  SWE: [`Framsida`],

  DAN: [`Forside`],

  FAR: [`Forsíða`],

  ITA: [`Prima pagina`]
};

export const FaqPageText: LanguageEnumsLongText = {
  ENG: [
    `Your task is to simplify sentences in such a way that the resulting text is better suited for 
    readers with language difficulties (such as people that have dyslexia or aphasia), L2 speakers 
    and/or children. When simplifying the sentences, please keep the following in mind:`,

    `• The simplified sentence should only contain common, everyday vocabulary. 
    Please avoid specialized or uncommon words as much as possible unless the sentence 
    explicitly explains the meaning of such words.`,

    `• Drop unnecessary information. The simplified sentences should maintain the meaning of the original 
    sentences but non-important information can be omitted. Example: Mount Everest, is Earth's highest 
    mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. --> The tallest 
    mountain in the world is Mount Everest. It is located in the Himalayas.`,

    `• Avoid unnecessary verbosity. Example: According to the guidelines of the institution, it is 
    recommended that children exercise for at least 60 minutes per day. --> The instutution recommends 
    that children exercise for at least 60 minutes per day.`,

    `• Simplify sentences so that they contain as few subordinate clauses as possible. If the original 
    sentence contains such clauses, the simplified version should rather contain multiple sentences, 
    separated by a period. Example: Watching Star Wars, which has lots of special effects, is my 
    favorite thing to do. --> I love watching Star Wars. It has lots of special effects.`,

    `• Avoid unusual word order and stylization. Simplified sentences should preferably be in the active 
    voice and the indicative mood. Example: Across the river and through the woods go 
    Ella and Larry. --> Ella and Larry go accross the river and through the woods.`
  ],

  ICE: [
    `Hlutverk þitt er að einfalda málsgreinar á þann hátt að þær henti betur lesendum 
    með lestrarörðugleika (t.d. vegna lesblindu eða málstols), annarsmálshöfum og/eða börnum. 
    Þegar þú einfaldar málsgreinarnar skaltu hafa eftirfarandi í huga:`,

    `• Einfaldaða málsgreinin ætti aðeins að innihalda algengan og hversdagslegan orðaforða. 
    Forðastu íðorð eða sjaldgæf orð eftir fremsta megni nema málsgreinin beinlínis útskýri 
    hvað viðkomandi orð þýðir. Ef þú ert óviss um hvort orð sem þú vilt nota er sjaldgæft eða 
    ekki skaltu skoða Orðtíðnivef Árnastofnunar (https://ordtidni.arnastofnun.is/). 
    Neðst á síðunni er að finna orðmyndir eftir tíðni annars vegar og uppflettimyndir 
    eftir tíðni hins vegar. Þú getur jafnframt leitað að tíðni orðs með leitarglugganum 
    þar fyrir ofan. Ef uppflettimynd orðsins sem þú vilt nota hefur tíðni sem er lægri en 
    30.000 er betra að nota annað, algengara orð í staðinn.`,

    `• Fjarlægðu óþarfa upplýsingar. Einfaldaða málsgreinin ætti að viðhalda merkingu upphaflegu 
    málsgreinarinnar en upplýsingar sem skipta litlu fyrir merkinguna má fjarlægja. 
    Dæmi: Snæfell er hæsta staka fjall landsins, 1833 m yfir sjó. --> Snæfell er hæsta fjall Íslands. 
    Það er 1833 metra hátt.`,

    `• Forðastu óþarfa málalengingar. Dæmi: Samkvæmt ráðleggingum stofnunarinnar er mælt með því að 
    börn hreyfi sig a.m.k. 60 mínútur á dag. --> Stofnunin mælir með því að börn hreyfi sig a.m.k. 
    60 mínútur á dag.`,

    `• Einfaldaðu málsgreinarnar á þann hátt að þær innihaldi sem fæstar aukasetningar. 
    Ef upphaflega málsgreinin inniheldur aukasetningar ætti einfaldaða útgáfan frekar að 
    skiptast í fleiri stuttar málsgreinar, aðskildar með punkti. Dæmi: Hérna er fjallið 
    sem mér þótti svo vænt um. --> Hérna er fjallið. Mér þótti vænt um það. `,

    `• Forðastu óhefðbundna orðaröð og stílfærslur. Einfaldaðar setningar ættu helst að vera í germynd 
    og framsöguhætti. Dæmi: Gagnrýnin sem fram hefur komið á fullan rétt á sér. --> Gagnrýnin sem 
    hefur komið fram á fullan rétt á sér.`
  ],

  NOR: [`Instruksjoner`],

  SWE: [`Instruktioner`],

  DAN: [`Instruktioner`],

  FAR: [`Leiðbeiningar`],

  ITA: [`Istruzioni`]
};