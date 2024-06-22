/* eslint-disable prettier/prettier */
import React from 'react';
import { CategoryType } from '../../../types/category/category_type';
import {
  CategoryItem,
  CategoryText,
  styles,
} from '../../../utils/constants';

type Props = {
  category: CategoryType;
  activeCategory: CategoryType | null;
  setActiveCategory: (category: CategoryType) => void;
  index: number;
};
export const CategoryHomeItem: React.FC<Props> = ({category, index, activeCategory, setActiveCategory}) => {
  let activeButtonClass = activeCategory?.id === category.id  ? 'bg-white shadow' : '';
  return (
    <CategoryItem
      onPress={setActiveCategory.bind(null, category)}
      key={index}
      style={styles.categoryItemHeight}
      className={`p-3 px-2 mt-4 mr-2 rounded-full flex mb-2 ${activeButtonClass}`}>
      <CategoryText
        className="font-semibold"
        style={activeCategory?.id === category.id ? styles.categoryActive : styles.categoryInactive}>
        {category.name}
      </CategoryText>
    </CategoryItem>
  );
};
