
import { create } from 'zustand';
import { CategoryType } from '../../types/category/category_type';

export type CategoryStoreType = {
  categories: CategoryType[] | null;
  setCategories: (categories: CategoryType[]) => void;
  activeCategory: CategoryType | null;
  setActiveCategory: (category: CategoryType) => void;
  homeCategories: CategoryType[] | null;
  setHomeCategories: (categories: CategoryType[]) => void;
};

export const useCategoryStore = create<CategoryStoreType>(set => ({
  categories: [],
  setCategories: categories => set({categories}),
  activeCategory: null,
  setActiveCategory: category => set({activeCategory: category}),
  homeCategories: [],
  setHomeCategories: categories => set({homeCategories: categories}),
}));

export default useCategoryStore;
