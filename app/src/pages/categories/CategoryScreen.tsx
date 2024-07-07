import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'
import useCategoriesViewModel from '../../hooks/categories/useCategoriesViewModel'
import { CategoryNavigationType } from '../../types/navigation/navigation_type'
import { Background, SafeContainer, styles } from '../../utils/constants'
import { CategoryComponent } from './components/CategoryComponent'
import { CategoryLoading } from './components/CategoryLoading'

type Props = {
   route: RouteProp<CategoryNavigationType, 'Categories'>
}
export const CategoriesScreen: React.FC<Props> = ({ route }) => {
   const { category } = route.params
  const { isLoading } = useCategoriesViewModel(category)
   
console.log(category?.professionals?.length);
   return (
      <Background
         className="flex-1 bg-white h-full"
         style={styles.paddingGlobal}
      >
         <SafeContainer>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
               {isLoading ? (
                  <CategoryLoading />
               ) : (
                  <CategoryComponent activeCategory={category} />
               )}
            </ScrollView>
         </SafeContainer>
      </Background>
   )
}
