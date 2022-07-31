import type { AppProps } from 'next/app';
// import useAuth from '@hooks/useAuth';

import 'nprogress/nprogress.css';
import '../styles/globals.css';

import TopProgressBar from 'src/components/shared/TopProgressBar';
import Header from 'src/components/shared/Header';

function MyApp ({ Component, pageProps }: AppProps) {
  // const { user } = useAuth();

  return (
    <>
      <TopProgressBar />
      <>
        <Header isLogged={!false} />
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
