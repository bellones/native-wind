import { getProfessionalByCategory } from "../../services/professional/professionalService";
import { useCategoryStore } from "../../stores";
import { CategoryType } from "../../types/category/category_type";
import { useLoadingRequest } from "../../utils/useLoadingRequest";

const useCategoriesViewModel = (category: CategoryType | undefined) => {

   const {setActiveCategory} = useCategoryStore();

 const {apiRequest, isLoading} = useLoadingRequest({
    apiFunc: async () => {
      if(category !== undefined && category.professionals === undefined){
           const professionals = await getProfessionalByCategory(category.id);
           if(professionals) {
            category.professionals = professionals;
            setActiveCategory(category);
            return;
           }
        }
    },
 });



 return { isLoading };
};
export default useCategoriesViewModel;