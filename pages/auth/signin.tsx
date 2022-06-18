import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@components/shared/Header';
import { logInGoogle } from '@utils/firebase/client';

const SignIn: NextPage = () => {
  const authMethods = [
    {
      name: 'Google',
      icon: 'google',
      color: 'bg-red-400',
      method: logInGoogle,
    },
    {
      name: 'Github',
      icon: 'github',
      color: 'bg-gray-700',
      method: logInGoogle,
    },
  ];

  return (
    <>
      <Head>
        <title>GTD App</title>
        <meta name="description" content="GTD App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Header />
        <div className="w-11/12 max-w-sm px-4 py-8 m-auto">
          {
            authMethods.map((auth) => (
              <button
                key={auth.name}
                className={`w-full ${auth.color} mb-4 text-white font-bold py-2 px-4 rounded-md`}
                onClick={auth.method}
                type="button"
              >
                {auth.name}
              </button>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SignIn;
