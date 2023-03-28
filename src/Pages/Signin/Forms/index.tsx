import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Form from 'Components/UI/Form';
import FormInput from 'Components/UI/Form/Input';
import Utilities from 'Utilities';
import Button from 'Components/UI/Button';
import Api from 'Api';
import useAPIError from 'Hooks/useAPIError';
import useUserActions from 'Hooks/useUserActions';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'Dictionary/routes';

interface ISignUpCredentials {
  email: string;
  code: string;
}

interface INextStepCredentials {
  email: string;
}

export default function Forms() {
  const methods = useForm<ISignUpCredentials>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [login, setLogin] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const { handleAPIError } = useAPIError();
  const { fetchUser } = useUserActions();
  const navigate = useNavigate();

  const handleSignup: SubmitHandler<ISignUpCredentials> = async ({ code }) => {
    try {
      const results = await Api.post(Api.routes.sendCode(), {
        login,
        password: code,
      });
      await Api.post(Api.routes.authJWT(), {
        access: results.access,
      });
      console.log(results);
      Utilities.apiTokenStorage.set(results.access);
      fetchUser();
      navigate(ROUTES.home());
      setStep(1);
    } catch (error: any) {
      handleAPIError(error);
    }
    setStep(1);
  };

  const onNextStep: SubmitHandler<INextStepCredentials> = async ({ email }) => {
    try {
      await Api.post(Api.routes.getCode(), { login: email });
      setLogin(email);
      // setStep(step + 1); TODO: сервер присылает 400 иногда по запросу, хотя код отправляет
    } catch (error: any) {
      setStep(1);
      handleAPIError(error);
    }
    setStep(step + 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <FormProvider {...methods}>
          <Form
            submitText="Получить код"
            onSubmit={methods.handleSubmit(onNextStep)}
            fullWidth
          >
            <FormInput
              rules={{
                required: true,
                pattern: {
                  value: Utilities.validation.EMAIL_REGEX,
                  message: 'Неверный формат почты',
                },
              }}
              type="email"
              name="email"
              label="Email"
            />
          </Form>
          <Button
            onClick={nextStep}
            type="button"
            className="signin__token-helper"
          >
            У меня есть код
          </Button>
        </FormProvider>
      )}
      {step === 2 && (
        <FormProvider {...methods}>
          <Form
            submitText="Войти"
            onSubmit={methods.handleSubmit(handleSignup)}
            fullWidth
          >
            <FormInput
              label="Код"
              rules={{ required: true }}
              type="text"
              name="code"
            />
          </Form>
        </FormProvider>
      )}
    </div>
  );
}
