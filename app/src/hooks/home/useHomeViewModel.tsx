/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { getUser } from '../../services/user/userService';
import useUserStore from '../../stores/user/userStore';

const useHomeViewModel = () => {
  const userItemStore = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  useEffect(() => {
    const user = async () => {
      if (userItemStore) {
        return;
      } else {
        const userItem = await getUser();
        if (userItem) {
          setUser(userItem);
          return;
        }
      }
    };
    user();
  }, [setUser, userItemStore]);

  const handlePress = () => {
    console.log('Button pressed');
  };
  return {handlePress, userItemStore};
};
export default useHomeViewModel;
