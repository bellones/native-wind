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
  index: number;
};
export const CategoryHomeItem: React.FC<Props> = ({category, index}) => {
  // let isActive = category.active;
  let activeButtonClass = index === 0 ? 'bg-white shadow' : '';
  return (
    <CategoryItem
      onPress={() => {}}
      key={index}
      style={styles.categoryItemHeight}
      className={`p-3 px-2 mb-4 mt-4 mr-2 rounded-full flex ${activeButtonClass}`}>
      <CategoryText
        className="font-semibold"
        style={index === 0 ? styles.categoryActive : styles.categoryInactive}>
        {category.name}
      </CategoryText>
    </CategoryItem>
  );
};
