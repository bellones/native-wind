/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { getBanners } from '../../services/banner/bannerService';
import { getCategory } from '../../services/category/categoryService';
import { getUser } from '../../services/user/userService';
import { useCategoryStore } from '../../stores';
import useBannerStore from '../../stores/banner/useBannerStore';
import useUserStore from '../../stores/user/userStore';
import { BannerType } from '../../types/banner/banner_type';
import { CategoryType } from '../../types/category/category_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useHomeViewModel = () => {
  const userItemStore = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const setBanners = useBannerStore(state => state.setBanners);
  const bannersItemStore = useBannerStore(state => state.banners);
  const categoriesItemStore = useCategoryStore(state => state.categories);
  const setCategories = useCategoryStore(state => state.setCategories);

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
      const bannersItem = await getBanners();
      if (bannersItem) {
        setBanners(bannersItem as BannerType[]);
        return;

    }
  }, [setBanners]);

  const categories = useCallback( async () => {
      const categoriesItem = await getCategory();
      console.log(categoriesItem, 'categoriesItem');
      if (categoriesItem) {
        setCategories(categoriesItem as CategoryType[]);
        return;
      }

  }, [setCategories]);

  const {apiRequest: initialize, isLoading} = useLoadingRequest({
    apiFunc: async () => {
      await Promise.all([user(), banners(), categories()]);
    },
    errorFunc: err => {
      console.log('err', err);
    },
  });

  const handlePress = () => {
    console.log('Button pressed');
  };
  return {handlePress, isLoading, initialize};
};
export default useHomeViewModel;
