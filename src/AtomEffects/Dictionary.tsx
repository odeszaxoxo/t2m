import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import dictionaryAtom from 'Recoil/Atoms/dictionary';
import Api from 'Api';
import routes from 'Api/routes';
import useAPIError from 'Hooks/useAPIError';

const params = {
  name: [
    'citizenship',
    'company_division_format',
    'education',
    'employment',
    'experience',
    'gender',
    'schedule',
    'professional_area',
    'resume_vacancy',
    'work_format',
    'business_directions',
  ],
};

export default function DictionaryEffect() {
  const setDictionary = useSetRecoilState(dictionaryAtom);
  const { handleAPIError } = useAPIError();

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const { results } = await Api.get(routes.api.dictionary(), params);
        setDictionary(results);
      } catch (error: any) {
        handleAPIError(error);
      }
    }

    fetchDictionary();
  }, []);

  return null;
}
