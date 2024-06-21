/* eslint-disable prettier/prettier */
import React from 'react';

import { FlatList } from 'react-native';
import useCategoryStore from '../../../stores/category/categoryStore';
import { HomeCategory, Title, styles } from '../../../utils/constants';
import { CategoryHomeItem } from './CategoryHomeItem';

export const Categories: React.FC = () => {
  const category = useCategoryStore(state => state.categories);
  return (
    <>
      <Title
        className="text-2xl font-semibold px-6 mt-6"
        style={styles.poppinsRegular}>
        Categorias
      </Title>
      <HomeCategory className="flex-row justify-around items-center mx-2 rounded-full px-4">
        <FlatList
          data={category}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <CategoryHomeItem category={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </HomeCategory>
    </>
  );
};
