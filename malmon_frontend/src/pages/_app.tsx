import { AppWrapper } from '@/context';
import styles from '@/styles/Home.module.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const start = (url: string) => {
      if (url.includes('limit')) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    const end = () => {
      setLoading(false);
    };
    // eslint-disable-next-line no-shadow
    const error = () => {
      setError(true);
    }
    
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', error);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', error);
    };
  }, []);

  return (
    <>
      {error ? (
        <div className={styles.loadingPage}>
          <h1>404: Síða fannst ekki</h1>
        </div>
      ) : (
        <>
          {loading ? (
            <div className={styles.loadingPage}>
              <h1>Sæki gögn...</h1>
            </div>
          ) : (
            <AppWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppWrapper>
          )}
        </>
      )}
    </>
  );
}