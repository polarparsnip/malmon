import { useUserContext } from '@/context';
import { LoggedInAs, RegisterLink, SignOutLink, SigninLink } from '@/lang';
import Link from 'next/link';
import { Button } from '../Button/Button';
import s from './Footer.module.scss';


export default function Footer() {
  const loginContext = useUserContext();

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

  
  return (
    <footer className={s.footer} >
      {loginContext.userLoggedIn.login ? (
        <p>{LoggedInAs[language]} {loginContext.userLoggedIn.user.username}</p>) : (
        <div>
          <p><Link className={s.footer__link} href='/login'>{SigninLink[language]}</Link></p>
          <br></br>
          <p><Link className={s.footer__link} href='/register'>{RegisterLink[language]}</Link></p>
        </div>
      )}
      {loginContext.userLoggedIn.login ? (
        <Button onClick={loginContext.logOut}>{SignOutLink[language]}</Button>) : (<div></div>
      )}
    </footer>
  )
}