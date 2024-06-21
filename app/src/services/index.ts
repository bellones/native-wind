/* eslint-disable prettier/prettier */
import { collection, getFirestore } from '@react-native-firebase/firestore';
export const db = getFirestore();
export const userCollection = collection(db, 'user');
export const bannerCollection = collection(db, 'banner');
export const categoryCollection = collection(db, 'category');
