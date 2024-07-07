import { useCallback, useEffect, useState } from 'react';
import { getProfessionalBySpeciality } from '../../services/professional/professionalService';
import { CategoryType } from '../../types/category/category_type';

const useCategoriesViewModel = (category: CategoryType | undefined) => {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const fetchProfessionals = useCallback(async () => {
      if (category) {
         const professionals = await getProfessionalBySpeciality(category?.name)
         category.professionals = professionals
         setIsLoading(false)
      }
   }, [])

   useEffect(() => {
      fetchProfessionals()
   }, [])

   return { isLoading }
}
export default useCategoriesViewModel
