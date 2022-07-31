import { useState, useEffect } from 'react';
import { onAuthChanged } from '@utils/firebase/client';
import { userInfo } from 'src/types/user';

export default function useAuth () {
  const [user, setUser] = useState<userInfo | null>(null);

  useEffect(() => {
    onAuthChanged((user) => {
      setUser(user);
    });
  }, []);

  return {
    user,
  };
}
