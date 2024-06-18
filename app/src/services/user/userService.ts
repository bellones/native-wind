/* eslint-disable prettier/prettier */

import auth from '@react-native-firebase/auth';
import { userCollection } from '..';
import { UserEnum, UserType } from '../../types/user/user_type';


export const getUser = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return;
  }
  const profile = await userCollection.where('authId', '==', user.uid).limit(1).get();
  if (profile.empty) {
    return;
  }
  const itemDoc = profile.docs[0];
  return itemDoc.data() as UserType;
};
export const createUser = async (email: string, password: string): Promise<void> => {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    if (userCredential.user) {
      const user = userCredential.user;
      const userDoc: UserType = {
        authId: user.uid,
        email: user.email ?? '',
        document: '',
        name:  '',
        photo: '',
        phone: '',
        birth: Date.now().toLocaleString(),
        type: UserEnum.CLIENT,
      };
      await userCollection.add(userDoc);
    }
};
export const signIn = async (email: string, password: string) => {
    await auth().signInWithEmailAndPassword(email, password);
};
export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.error(error);
  }
};
export const getCurrentUser = () => {
  const user = auth().currentUser;
  return user  ??  null;
};
export const updateProfile = async (data: UserType): Promise<void> => {
    const user = await getCurrentUser();
    if (!user) {
      return;
    }
    const profile = await userCollection.where('authId', '==', user.uid).limit(1).get();
    if (profile.empty) {
      return;
    }
    const itemDoc = profile.docs[0];
    await itemDoc.ref.update(data);
};

export const recoverPassword = async (email: string) => {
  await auth().sendPasswordResetEmail(email);
};
