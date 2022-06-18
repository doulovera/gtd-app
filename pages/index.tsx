import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/shared/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GTD App</title>
        <meta name="description" content="GTD App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Header />
        <div className="text-center">
          <h1 className="mt-6 font-bold text-6xl">
            ¡Hola!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
