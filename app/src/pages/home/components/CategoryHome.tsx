import React from 'react'

import { useCategoryStore } from '../../../stores'
import { Container } from '../../../utils/constants'
import { CategoryProfessional } from './CategoryProfessional'

export const CategoryHome: React.FC = () => {
   const homeCategories = useCategoryStore((state) => state.homeCategories)

   return (
      <Container>
         {homeCategories?.map((category, index) => (
            <CategoryProfessional key={index} category={category} />
         ))}
      </Container>
   )
}
