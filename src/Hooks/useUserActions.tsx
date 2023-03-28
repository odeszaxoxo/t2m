import Api from 'Api';
import ROUTES from 'Dictionary/routes';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import Utilities from 'Utilities';
import useAPIError from './useAPIError';

export default function useUserActions() {
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const { handleAPIError } = useAPIError();

  const fetchUser = async () => {
    try {
      const results = await Api.post(Api.routes.me(), {});
      setUser({
        logged: true,
        ...results,
      });
    } catch (error: any) {
      setUser({
        logged: false,
      });
      // Utilities.apiTokenStorage.remove();
      handleAPIError(error);
    }
  };

  const updateSettings = async (values: object) => {
    try {
      const results = await Api.post(Api.routes.updateSettings(), {
        ...values,
        access: Utilities.apiTokenStorage.get(),
      });
      setUser({
        logged: true,
        ...results,
      });
    } catch (error: any) {
      setUser({
        logged: false,
      });
      handleAPIError(error);
    }
  };

  const signOut = async () => {
    Utilities.apiTokenStorage.remove();
    setUser({
      logged: false,
    });
    navigate(ROUTES.signin());
  };

  return {
    fetchUser,
    signOut,
    updateSettings,
  };
}
