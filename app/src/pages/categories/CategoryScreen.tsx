
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { BackButton } from '../../components/BackButton';
import useCategoriesViewModel from '../../hooks/categories/useCategoriesViewModel';
import { useCategoryStore } from '../../stores';
import { CategoryNavigationType } from '../../types/navigation/navigation_type';
import { Background, SafeContainer, styles } from '../../utils/constants';
import { CategoryList } from './components/CategoryList';
import { CategoryLoading } from './components/CategoryLoading';

type Props = {
  route : RouteProp<CategoryNavigationType, 'Categories'>;
};
export const CategoriesScreen: React.FC<Props> = ({route}) => {
  const { category } = route.params;
  const { isLoading } = useCategoriesViewModel(category);
  const {activeCategory} = useCategoryStore();

   return (
      <Background
         className="flex-1 bg-white h-full"
         style={styles.paddingGlobal}
      >
         <SafeContainer>
            <ScrollView
               showsVerticalScrollIndicator={false}
               horizontal={false}
            >
              <BackButton />
              {
               isLoading ? <CategoryLoading /> : <CategoryList professionals={activeCategory?.professionals} />
              }
            </ScrollView>
         </SafeContainer>
      </Background>
   )
}
