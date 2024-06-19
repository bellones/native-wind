/* eslint-disable prettier/prettier */
import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { getUser, signIn } from '../../services/user/userService';
import { LoginFormValuesType } from '../../types/login/login_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';
import useHomeViewModel from '../home/useHomeViewModel';
const useLoginViewModel =  (handleSubmit: UseFormHandleSubmit<LoginFormValuesType, undefined>) => {
  const navigation = useNavigation();
  const {initialize} = useHomeViewModel();

  const [isVisible, setIsVisible] = useState(true);

  const navigateToRegister = () => {
    navigation.navigate('CreateAccount' as never);
  };
  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPass' as never);
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  const {apiRequest: handleLogin, isLoading} = useLoadingRequest({
    apiFunc: handleSubmit( async (values: LoginFormValuesType) => {
    await signIn(values.email, values.password);
      const user =  await getUser();
      if (user) {
        await initialize();
        navigation.dispatch(
          StackActions.replace('Tabs')
        );
      }

    }),
    errorFunc: err => {
      console.log(err);
    },
  });

  return {
    handleLogin,
    isLoading,
    isVisible,
    handleVisible,
    navigateToRegister,
    navigateToForgotPassword,
  };
};

export default useLoginViewModel;
