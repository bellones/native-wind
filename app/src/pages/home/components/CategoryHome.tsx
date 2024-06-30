import React from 'react'

import { useCategoryStore } from '../../../stores'
import { CategoryType } from '../../../types/category/category_type'
import { List } from '../../../utils/constants'
import { CategoryProfessional } from './CategoryProfessional'

export const CategoryHome: React.FC = () => {
   const { homeCategories } = useCategoryStore()

   return (
      <List
         data={homeCategories}
         scrollEnabled={false}
         keyExtractor={(item, index) => `${item}${index}`}
         renderItem={({ item }) => (
            <CategoryProfessional category={item as CategoryType} />
         )}
      ></List>
   )
}
