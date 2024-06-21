/* eslint-disable prettier/prettier */
import storage from '@react-native-firebase/storage';
import { bannerCollection } from '..';
import { BannerType } from '../../types/banner/banner_type';

export const getBanners = async (): Promise<BannerType[]> => {
  const bannerList = await bannerCollection.where('active', '==', true).get();
  const banners = await Promise.all(
    bannerList.docs.map(async (doc) => {
      const data = doc.data();
      const image = await getImageBanner(data.image);
      return {
        ...data,
        id: doc.id,
        image,
      } as BannerType;
    })
  );
  return banners;
};

export const getImageBanner = async (url: string): Promise<string> => {
  const downloadURL = await storage().ref(`banner/${url}`).getDownloadURL();
  return downloadURL;
};
