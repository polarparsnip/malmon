import { useUserContext } from '@/context';
import {
  HeaderAccountLink,
  HeaderDownloadDataLink,
  HeaderScoreTableLink,
  HeaderSimplifyLink,
  HeaderVerifyLink,
  SigninLink
} from '@/lang';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import s from './Header.module.scss';

export default function Header() {
  const loginContext = useUserContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

  return (
    <header className={s.header}>
      <div className={s.header__title}>
        <Image
              src='/mlogo.png'
              alt='Logo'
              className={s.logo}
              width={40}
              height={40}
              priority
        />
        <h1><Link href='/' >MALMON</Link></h1>
      </div>
      
      <nav className={s.header__navigation}>
        {loginContext.userLoggedIn.login ? (
          <>
            <ul className={s.header__menuLinks}>
              <li><Link href='/download'>{HeaderDownloadDataLink[language]}</Link></li>
              <li><Link href='/leaderboard'>{HeaderScoreTableLink[language]}</Link></li>
              <li><Link href='/simplify'>{HeaderSimplifyLink[language]}</Link></li>
              <li><Link href='/verify'>{HeaderVerifyLink[language]}</Link></li>
              {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
                <li><Link href='/admin'>Admin</Link></li>
              ) : (
                <>
                  <li><Link href='/faq'>FAQ</Link></li>
                  <li><Link href='/account'>{HeaderAccountLink[language]}</Link></li>
                </>
              )}
            </ul>

            {menuOpen &&
              <ul className={s.header__mobileLinks}>
              <li><Link href='/download'>{HeaderDownloadDataLink[language]}</Link></li>
              <li><Link href='/leaderboard'>{HeaderScoreTableLink[language]}</Link></li>
              <li><Link href='/simplify'>{HeaderSimplifyLink[language]}</Link></li>
              <li><Link href='/verify'>{HeaderVerifyLink[language]}</Link></li>
                {loginContext.userLoggedIn.login && loginContext.userLoggedIn.user.admin ? (
                  <li><Link href='/admin'>Admin</Link></li>
                ) : (
                  <>
                    <li><Link href='/faq'>FAQ</Link></li>
                    <li><Link href='/account'>{HeaderAccountLink[language]}</Link></li>
                  </>
                )}
              </ul>
            }

            <button className={s.header__hamburgerIcon} onClick={() => { 
              if (menuOpen) {
                setMenuOpen(false);
              } else {
                setMenuOpen(true);
              }
            }}>
              {menuOpen ? '✕' : '☰'}
            </button>

          </>
        ) : (
          <>
            <ul className={s.header__menuLinks}>
              <li><Link href='/download'>{HeaderDownloadDataLink[language]}</Link></li>
              <li><Link href='/login'>{SigninLink[language]}</Link></li>
            </ul>
            
            {menuOpen &&
              <ul className={s.header__mobileLinks}>
                <li><Link href='/download'>{HeaderDownloadDataLink[language]}</Link></li>
                <li><Link href='/login'>{SigninLink[language]}</Link></li>
              </ul>
            }

            <button className={s.header__hamburgerIcon} onClick={() => { 
              if (menuOpen) {
                setMenuOpen(false);
              } else {
                setMenuOpen(true);
              }
            }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </>
        )}
      </nav>
    </header>
  )
}