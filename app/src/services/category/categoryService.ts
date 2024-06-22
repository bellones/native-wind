/* eslint-disable prettier/prettier */
import storage from '@react-native-firebase/storage';
import { categoryCollection } from '..';
import { CategoryType } from '../../types/category/category_type';


export const getCategory = async (): Promise<CategoryType[]> => {
  const categoryList = await categoryCollection
    .where('active', '==', true)
    .get();
  const categories = await Promise.all(
    categoryList.docs.map(async doc => {
      const data = doc.data();
      //   const image = await getImage(data.image);
      return {
        ...data,
        id: doc.id,
        // image,
      } as CategoryType;
    }),
  );

  return categories;
};

export const getImage = async (url: string): Promise<string> => {
  const downloadURL = await storage().ref(`category/${url}`).getDownloadURL();
  return downloadURL;
};


export const getHomeCategory = async (): Promise<CategoryType[]> => {
  const categoryList = await categoryCollection
    .where('active', '==', true)
    .limit(3)
    .get();
  const categories = await Promise.all(
    categoryList.docs.map(async doc => {
      const data = doc.data();
      //   const image = await getImage(data.image);
      return {
        ...data,
        id: doc.id,
        // image,
      } as CategoryType;
    }),
  );

  return categories;
};
