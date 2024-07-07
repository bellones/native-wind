import React from 'react'
import { View } from 'react-native'
import { BackButton } from '../../../components/BackButton'
import { CategoryType } from '../../../types/category/category_type'
import { Row, Title, styles } from '../../../utils/constants'
import { CategoryList } from './CategoryList'


type Props = {
   activeCategory: CategoryType | undefined
}

export const CategoryComponent: React.FC<Props> = ({activeCategory}) => {
   return (
      <View>
         <Row className="justify-start items-center flex-row">
            <BackButton />
            <Title
               className="text-2xl font-semibold mx-2 mt-2 mb-2 text-black"
               style={styles.poppinsRegular}
            >
               {activeCategory?.name}
            </Title>
         </Row>
         <CategoryList professionals={activeCategory?.professionals} />
      </View>
   )
}
