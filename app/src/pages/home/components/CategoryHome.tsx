/* eslint-disable prettier/prettier */
import React from 'react';

import { useCategoryStore } from '../../../stores';
import { CategoryProfessional } from './CategoryProfessional';

export const CategoryHome: React.FC = () => {

const homeCategories = useCategoryStore((state) => state.homeCategories);


  return (

   <>
   {
    homeCategories?.map((category, index) => (

      <CategoryProfessional key={index} category={category} />
    ))
   }
   </>
  );
};
