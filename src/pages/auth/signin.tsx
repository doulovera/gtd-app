import type { NextPage } from 'next';
import Head from 'next/head';
import { logInGoogle } from '@utils/firebase/client';
import SignInProviderButton from '@components/auth/SignInProviderButton';

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
      method: () => console.log('Github'),
      disabled: true,
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
        <div className="w-11/12 max-w-sm px-4 py-8 m-auto">
          {
            authMethods.map((auth) => <SignInProviderButton key={auth.name} {...auth} />)
          }
        </div>
      </div>
    </>
  );
};

export default SignIn;
