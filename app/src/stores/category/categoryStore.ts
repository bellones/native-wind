/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { CategoryType } from '../../types/category/category_type';

export type CategoryStoreType = {
  categories: CategoryType[] | null;
  setCategories: (categories: CategoryType[]) => void;
};

export const useCategoryStore = create<CategoryStoreType>(set => ({
  categories: [],
  setCategories: categories => set({categories}),
}));

export default useCategoryStore;
