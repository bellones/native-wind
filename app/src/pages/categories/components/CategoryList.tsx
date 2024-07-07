import { ProfessionalType } from '../../../types/professional/professional_type'
import { List } from '../../../utils/constants'
import { CategoryListItem } from './CategoryListItem'

type Props = {
   professionals: ProfessionalType[] | undefined
}

export const CategoryList: React.FC<Props> = ({ professionals }) => {
   return (
      <List
         scrollEnabled={false}
         data={professionals}
         renderItem={({ item }) => (
            <CategoryListItem item={item as ProfessionalType} />
         )}
         keyExtractor={(item, index) => `${item}${index}`}
      />
   )
}
