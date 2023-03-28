import useUserActions from 'Hooks/useUserActions';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';

export default function UserEffect() {
  const user = useRecoilValue(userAtom);

  const { fetchUser } = useUserActions();

  useEffect(() => {
    if (user.logged) {
      fetchUser();
    }
  }, []);

  return null;
}
