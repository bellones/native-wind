/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { getAddress } from '../../services/address/addressService';
import { getBanners } from '../../services/banner/bannerService';
import { getCategory } from '../../services/category/categoryService';
import { getProfessionalListHome } from '../../services/professional/professionalService';
import { getUser } from '../../services/user/userService';
import { useCategoryStore } from '../../stores';
import useAddressStore from '../../stores/address/useAddressStore';
import useBannerStore from '../../stores/banner/useBannerStore';
import useUserStore from '../../stores/user/userStore';
import { BannerType } from '../../types/banner/banner_type';
import { CategoryType } from '../../types/category/category_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useHomeViewModel = () => {
  const userItemStore = useUserStore(state => state.user);
  const bannersItemStore = useBannerStore(state => state.banners);
  const addressItemStore = useAddressStore(state => state.addresses);
  const setUser = useUserStore(state => state.setUser);
  const setBanners = useBannerStore(state => state.setBanners);
  const setCategories = useCategoryStore(state => state.setCategories);
  const setHomeCategories = useCategoryStore(state => state.setHomeCategories);
  const setAddress = useAddressStore(state => state.setAddress);
  const setSelectedAddress = useAddressStore(state => state.setSelectedAddress);

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
    if(bannersItemStore && bannersItemStore.length > 0) {return;}
    const bannersItem = await getBanners();
    if (bannersItem) {
      setBanners(bannersItem as BannerType[]);
      return;
    }
  }, [setBanners, bannersItemStore]);

  const categories = useCallback(async () => {

    const getProfessionalData = async (
      categs : CategoryType[]
    ) => {
      const updatedCategories = await getProfessionalListHome(categs);
      setHomeCategories(updatedCategories);
    };
    const categoriesItem = await getCategory();
    if (categoriesItem) {
      categoriesItem.sort((a, b) => a.name.localeCompare(b.name));

      // Function to get unique random items from the categories
      const getRandomUniqueItems = (items: CategoryType[], count: number): CategoryType[] => {
        const uniqueItems: CategoryType[] = [];

        while (uniqueItems.length < count && uniqueItems.length < items.length) {
          const randomIndex = Math.floor(Math.random() * items.length);
          const selectedItem = items[randomIndex];

          if (!uniqueItems.some(item => item.id === selectedItem.id)) {
            uniqueItems.push(selectedItem);
          }
        }

        return uniqueItems;
      };
      const addedItens = getRandomUniqueItems(categoriesItem, 5);
      await getProfessionalData(addedItens);
      setCategories(categoriesItem as CategoryType[]);
      return;
    }
  }, [setHomeCategories, setCategories]);

  const addresses = useCallback(async () => {
    if(addressItemStore && addressItemStore.length > 0) {return;}
    const userItemId = await getUser();
    const address = await getAddress(userItemId?.id as string);
    if (address) {
      setAddress(address);
      const selectedAddress = address.find((item) => item.main === true);
      if(selectedAddress){
        setSelectedAddress(selectedAddress);
        return;
      }
    }
  }, [addressItemStore, setAddress, setSelectedAddress]);

  const {apiRequest: initialize, isLoading} = useLoadingRequest({
    apiFunc: async () => {
      await Promise.all([user(), banners(), addresses(), categories()]);
    },
    errorFunc: err => {
      console.log('err', err);
    },
  });

  const handlePress = () => {
    console.log('Button pressed');
  };
  return {handlePress, isLoading, initialize, categories};
};
export default useHomeViewModel;
