
import { StackActions, useNavigation } from '@react-navigation/native';
import { signOut } from '../../services/user/userService';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useProfileViewModel = () => {
  const navigation = useNavigation();
  const {apiRequest: handleLogoff, isLoading} = useLoadingRequest({
    apiFunc: async () => {
      await signOut();
      navigation.dispatch(StackActions.replace('Login'));
    },
    errorFunc: err => {
      console.log('err', err);
    },
  });

  return {
    handleLogoff,
    isLoading,
  };
};
export default useProfileViewModel;
