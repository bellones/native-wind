/* eslint-disable prettier/prettier */
import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { getUser, signIn } from '../../services/user/userService';
import useUserStore from '../../stores/user/userStore';
import { LoginFormValuesType } from '../../types/login/login_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';
const useLoginViewModel =  (handleSubmit: UseFormHandleSubmit<LoginFormValuesType, undefined>) => {
  const navigation = useNavigation();
  const setUser = useUserStore(state => state.setUser);

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
        console.log(user, 'banana');
        setUser(user);
      }
      navigation.dispatch(
        StackActions.replace('Tabs')
      );
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
