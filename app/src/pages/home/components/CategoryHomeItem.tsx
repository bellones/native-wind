
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { CategoryType } from '../../../types/category/category_type';
import { CategoryNavigationType } from '../../../types/navigation/navigation_type';
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

  const navigation = useNavigation<NativeStackNavigationProp<CategoryNavigationType>>();

  const handleNavigation = () => {
      setActiveCategory(category);
      navigation.navigate('Categories',{ category: category ?? undefined });
  };
  return (
    <CategoryItem
      onPress={handleNavigation}
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
