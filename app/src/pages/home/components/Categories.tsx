import React from 'react'

import { FlatList } from 'react-native'
import useCategoryStore from '../../../stores/category/categoryStore'
import { HomeCategory, Title, styles } from '../../../utils/constants'
import { CategoryHomeItem } from './CategoryHomeItem'

export const Categories: React.FC = () => {
   const { categories, activeCategory, setActiveCategory } = useCategoryStore();
   return (
      <>
         <Title
            className="text-2xl font-semibold mx-2 mt-6 text-black"
            style={styles.poppinsRegular}
         >
            Categorias
         </Title>
         <HomeCategory className="flex-row justify-around items-centerrounded-full mx-1">
            <FlatList
               data={categories}
               keyExtractor={(item) => item.id}
               renderItem={({ item, index }) => (
                  <CategoryHomeItem
                     category={item}
                     index={index}
                     activeCategory={activeCategory}
                     setActiveCategory={setActiveCategory}
                  />
               )}
               horizontal
               showsHorizontalScrollIndicator={false}
            />
         </HomeCategory>
      </>
   )
}
