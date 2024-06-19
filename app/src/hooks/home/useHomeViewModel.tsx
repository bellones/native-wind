/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { getBanners } from '../../services/banner/bannerService';
import { getUser } from '../../services/user/userService';
import useBannerStore from '../../stores/banner/useBannerStore';
import useUserStore from '../../stores/user/userStore';
import { BannerType } from '../../types/banner/banner_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useHomeViewModel = () => {
  const userItemStore = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const setBanners = useBannerStore(state => state.setBanners);
  const bannersItemStore = useBannerStore(state => state.banners);
  const user = useCallback(
    async () => {
    if (userItemStore) {
      return;
    } else {
      const userItem = await getUser();
      if (userItem) {
        setUser(userItem);
        return;
      }
    }
  }, [setUser, userItemStore]);
  const banners = useCallback( async () => {
    if (bannersItemStore) {
      return;
    } else {
      const bannersItem = await getBanners();
      if (bannersItem) {
        setBanners(bannersItem as BannerType[]);
        return;
      }
    }
  }, [bannersItemStore, setBanners]);

  const {apiRequest: initialize, isLoading} = useLoadingRequest({
    apiFunc: async () => {
      await Promise.all([user(), banners()]);
    },
    errorFunc: err => {
      console.log('err', err);
    },
  });

  const handlePress = () => {
    console.log('Button pressed');
  };
  return {handlePress, userItemStore, bannersItemStore, isLoading, initialize};
};
export default useHomeViewModel;
