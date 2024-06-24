/* eslint-disable prettier/prettier */
import { collection, getFirestore } from '@react-native-firebase/firestore';
export const db = getFirestore();
export const userCollection = collection(db, 'user');
export const bannerCollection = collection(db, 'banner');
export const categoryCollection = collection(db, 'category');
export const professionalCollection = collection(db, 'professional');
export const professionalCategoryCollection = collection(db, 'professionalCategory');
export const professionalRatingCollection = collection(db, 'professionalRating');
export const addressCollection = collection(db, 'address');

