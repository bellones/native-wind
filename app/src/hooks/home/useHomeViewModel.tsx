/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { getBanners } from '../../services/banner/bannerService';
import { getCategory } from '../../services/category/categoryService';
import { getProfessionalByCategory, getProfessionals } from '../../services/professional/professionalService';
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
  const setCategories = useCategoryStore(state => state.setCategories);
  const setHomeCategories = useCategoryStore(state => state.setHomeCategories);

  const user = useCallback(async () => {
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
  const banners = useCallback(async () => {
    const bannersItem = await getBanners();
    if (bannersItem) {
      setBanners(bannersItem as BannerType[]);
      return;
    }
  }, [setBanners]);

  const categories = useCallback(async () => {

    const getProfessionalData = async (
      categs : CategoryType[]
    ) => {
      for (let index = 0; index < categs.length; index++) {
        const professionals = await getProfessionalByCategory(categs[index].id);
        categs[index].professionals = professionals;
      }
      setHomeCategories(categs);
    };

    const categoriesItem = await getCategory();
    if (categoriesItem) {
      categoriesItem.sort((a, b) => a.name.localeCompare(b.name));
      const addedItens: CategoryType[] = [];
      for (let index = 0; index < categoriesItem.length; index++) {

        var random = Math.floor(Math.random() * categoriesItem.length);
        var addedItem = categoriesItem[random];
        const exists = addedItens?.find(
          item => item.id === addedItem.id,
        );
        if (!exists && addedItens.length < 5) {
          addedItens.push(addedItem);
        }
      }
      await getProfessionalData(addedItens);
      setCategories(categoriesItem as CategoryType[]);
      return;
    }
  }, [setHomeCategories, setCategories]);



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
  return {handlePress, isLoading, initialize, getProfessionals};
};
export default useHomeViewModel;
