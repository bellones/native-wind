
import { useCategoryStore } from '../../../stores'
import { CategoryType } from '../../../types/category/category_type'
import { List, styles } from '../../../utils/constants'
import { SearchCategoriesListItem } from './SearchCategoriesListItem'

export const SearchCategories = () => {
   const { categories } = useCategoryStore();
   return (
      <List
         data={categories}
         keyExtractor={(item, index) => `${item}${index}`}
         columnWrapperStyle={styles.justifyBetween}
         numColumns={2}
         scrollEnabled={false}
         renderItem={({ item }) => {
            return <SearchCategoriesListItem category={item as CategoryType} />
         }}
      />
   )
}
