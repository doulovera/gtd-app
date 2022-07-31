import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GTD App</title>
        <meta name="description" content="GTD App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen pt-14 text-white bg-primary-darker">
        <div className="text-center">
          <h1 className="font-bold text-6xl">
            {/* ¡Hola! */}
          </h1>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      isPublic: true,
    },
  };
};

export default Home;
