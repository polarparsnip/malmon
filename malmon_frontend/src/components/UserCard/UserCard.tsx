import { AdminSimplifiedSentences, Email, UserCreated, Username, Verifications } from '@/lang';
import { User } from '@/types';
import s from './UserCard.module.scss';

export default function UserCard(
  {value}: {value: User}
) {
  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

  return (
    <div className={s.card__cardContent}>
      <h2>{Username[language]}: {value.username}</h2>
      <h3>{Email[language]}: {value.email}</h3>
      <p>{AdminSimplifiedSentences[language]}: {value.completedsentences}</p>
      <p>{Verifications[language]}: {value.completedverifications}</p>
      <p>{UserCreated[language]}: {value.created}</p>
    </div>
  )
}