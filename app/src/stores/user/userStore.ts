/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { UserType } from '../../types/user/user_type';

type UserStore = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};

const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: user => set( ({ user })),
}));
export default useUserStore;

