/* eslint-disable prettier/prettier */
import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { signIn } from '../../services/user/userService';
import { LoginFormValuesType } from '../../types/login/login_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useLoginViewModel =  (handleSubmit: UseFormHandleSubmit<LoginFormValuesType, undefined>) => {
  const navigation = useNavigation();

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
      navigation.dispatch(
        StackActions.replace('Tabs')
      );
    }),
    errorFunc: err => {
      console.log('mim gostar batata', err);
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
