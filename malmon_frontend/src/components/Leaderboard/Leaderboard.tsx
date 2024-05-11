/* eslint-disable no-plusplus */
import {
  Sentences,
  Username,
  Verifications
} from '@/lang';
import { User, Users } from '@/types';
import s from './Leaderboard.module.scss';

export default function Leaderboard(
    {users}: {users: Users}
    ) {
    let position = 1;

    const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

    return (

      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>{Username[language]}</th>
            <th>{Sentences[language]}</th>
            <th>{Verifications[language]}</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((value: User) => (
            !value.admin ? (
              <tr key={value.id}>
                <td>{position++}</td>
                <td>{value.username}</td>
                <td>{value.completedsentences}</td>
                <td>{value.completedverifications}</td>
              </tr>
            ) : (<></>)    
          ))}
        </tbody>
      </table>

    )
}