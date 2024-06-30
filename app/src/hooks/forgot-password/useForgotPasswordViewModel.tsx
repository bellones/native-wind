
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UseFormHandleSubmit } from 'react-hook-form';
import { recoverPassword } from '../../services/user/userService';
import { LoginNavigationType } from '../../types/navigation/navigation_type';
import { ForgotPassFormType } from '../../types/recoverpass/recover_pass_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useForgotPasswordViewModel = (handleSubmit: UseFormHandleSubmit<ForgotPassFormType, undefined>) => {
  const navigation = useNavigation<NativeStackNavigationProp<LoginNavigationType>>();
  const {apiRequest: handleRecover, isLoading} = useLoadingRequest({
    apiFunc: handleSubmit(async (values: ForgotPassFormType) => {
      await recoverPassword(values.email);
      navigation.navigate('Login');
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
