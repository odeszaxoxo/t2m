/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: закончить типизацию

interface IErrorData {
  error?: string;
  details?: { message?: string; type: string };
}

interface IError {
  abortError?: object;
  status?: number;
  data?: IErrorData;
  message?: string;
}

type TSetApiErrorState = string | null;

interface IErrorField {
  type?: string;
  message?: string;
}

interface IUseApiErrorProps {
  // eslint-disable-next-line no-unused-vars
  setError?: (
    name: string,
    data: IErrorField,
    config?: { shouldsFocus?: boolean }
  ) => void;
}

export default function useAPIError(methods: IUseApiErrorProps | null = null) {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<TSetApiErrorState>();

  const handleAPIError = useCallback((error: IError) => {
    if (error.abortError) {
      console.error('Request was canceled');
    } else if (error.status === 500) {
      setApiError(error?.data?.error);
    } else if (
      error.status === 400 &&
      error.data?.error === 'Validation errors' &&
      methods?.setError
    ) {
      Object.entries(error.data.details).forEach(([key, errorText]) => {
        methods?.setError?.(key, { type: 'manual', message: errorText });
      });
    } else if (error.status === 404) {
      navigate('/404');
    } else if (error.status === 200) {
      setApiError(error.message);
    }
  }, []);

  const clearError = () => {
    setApiError(null);
  };

  return { handleAPIError, apiError, clearError };
}
