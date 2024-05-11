import { SimplifiedSentence } from '@/types'
import s from './SimplifiedSentenceCard.module.scss'

export default function SimplifiedSentenceCard(
    {value}: {value: SimplifiedSentence}
    ) {
    return (
      <div className={s.card__cardContent}>
        <h3>Einfölduð Setning:</h3>
        <p>{value.simplifiedsentence}</p>
        <h3>Upprunaleg setning:</h3>
        <p>{value.originalsentence}</p>
        <p>Einfölduð af: {value.userid} þann {value.created}</p>
        {value.verified? (<p>Hefur verið staðfest</p>) : (<p>Hefur ekki verið staðfest</p>)}
      </div>
    )
}