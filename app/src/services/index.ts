/* eslint-disable prettier/prettier */
import { collection, getFirestore } from '@react-native-firebase/firestore';
export const db = getFirestore();
export const userCollection = collection(db, 'user');
