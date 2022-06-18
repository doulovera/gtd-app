import { initializeApp, getApps } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { userInfo } from 'types/user';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '229023413701',
  appId: '1:229023413701:web:ea9075b7e105918075c7ac',
};

!getApps().length && initializeApp(firebaseConfig);

const auth = getAuth();

const mapUserFromAuth = (user: any) => {
  const { email, photoURL, displayName, uid } = user;
  // TODO: parse necessary user info
  return {
    email,
    photoURL,
    displayName,
    uid,
  };
};

export const onAuthChanged = (onChange: (user: userInfo | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromAuth(user) : null;
    onChange(normalizedUser);
  });
};

export const logInGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/tasks.readonly');
  return signInWithRedirect(auth, provider);
};
