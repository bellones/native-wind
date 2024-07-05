import { useEffect } from "react";
import { getProfessionalBySpeciality } from "../../services/professional/professionalService";
import { useCategoryStore } from "../../stores";
import { CategoryType } from "../../types/category/category_type";
import { useLoadingRequest } from "../../utils/useLoadingRequest";

const useCategoriesViewModel = (category: CategoryType | undefined) => {

   const {setActiveCategory} = useCategoryStore();

 const {apiRequest: _ , isLoading} = useLoadingRequest({
    apiFunc: async () => {
      if(category !== undefined){
           const professionals = await getProfessionalBySpeciality(category.name);
           if(professionals) {
            category.professionals = professionals;
            setActiveCategory(category);
           }
        }
    },
 });

 useEffect(() => {
      _();
 }, [])


 return { isLoading };
};
export default useCategoriesViewModel;