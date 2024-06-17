/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { UseFormHandleSubmit } from 'react-hook-form';
import { recoverPassword } from '../../services/user/userService';
import { ForgotPassFormType } from '../../types/recoverpass/recover_pass_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useForgotPasswordViewModel = (handleSubmit: UseFormHandleSubmit<ForgotPassFormType, undefined>) => {
  const navigation = useNavigation();
  const {apiRequest: handleRecover, isLoading} = useLoadingRequest({
    apiFunc: handleSubmit(async (values: ForgotPassFormType) => {
      await recoverPassword(values.email);
      navigation.navigate('Login' as never);
    }),
    errorFunc: err => {
      console.log('err', err);
    },
  });

  return {
    handleRecover,
    isLoading,
  };
};
export default useForgotPasswordViewModel;
