import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'
import { BackButton } from '../../components/BackButton'
import useCategoriesViewModel from '../../hooks/categories/useCategoriesViewModel'
import { useCategoryStore } from '../../stores'
import { CategoryNavigationType } from '../../types/navigation/navigation_type'
import {
   Background,
   Row,
   SafeContainer,
   styles,
   Title,
} from '../../utils/constants'
import { CategoryList } from './components/CategoryList'
import { CategoryLoading } from './components/CategoryLoading'

type Props = {
   route: RouteProp<CategoryNavigationType, 'Categories'>
}
export const CategoriesScreen: React.FC<Props> = ({ route }) => {
   const { category } = route.params
   const { isLoading } = useCategoriesViewModel(category)
   const { activeCategory } = useCategoryStore()

   console.log(activeCategory, 'do you like potato')

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
                  <>
                     <Row className="justify-start items-center flex-row">
                        <BackButton />
                        <Title
                           className="text-2xl font-semibold mx-2 mt-2 mb-2 text-black"
                           style={styles.poppinsRegular}
                        >
                           {activeCategory?.professionals?.length
                              ? activeCategory?.name
                              : 'Nenhum profissional encontrado'}
                        </Title>
                     </Row>
                     <CategoryList
                        professionals={activeCategory?.professionals}
                     />
                  </>
               )}
            </ScrollView>
         </SafeContainer>
      </Background>
   )
}
