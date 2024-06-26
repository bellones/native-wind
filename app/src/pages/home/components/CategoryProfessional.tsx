/* eslint-disable prettier/prettier */
import React from 'react';
import { CategoryType } from '../../../types/category/category_type';
import { ProfessionalType } from '../../../types/professional/professional_type';
import { List, Row, TextButton, Title, styles } from '../../../utils/constants';
import { CategoryProfessionalListItem } from './CategoryProfessionalListItem';


type Props = {
  category: CategoryType;
};
export const CategoryProfessional: React.FC<Props> = ({category}) => {
  return (
    <>
    <Row className="flex items-center justify-between flex-row ">
    <Title
        className="text-2xl font-semibold px-4 mt-4 mb-4 text-black"
        style={styles.poppinsRegular}>
        {category?.name}
      </Title>
      <TextButton>

        <Title className="font-semibold px-4 mt-4 mb-4" style={[styles.poppinsSemiBold, styles.textButtonColor]}>Ver Todos</Title>
      </TextButton>
      </Row>
      <List
        data={category?.professionals}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item}) => (
          <CategoryProfessionalListItem
            professional={item as ProfessionalType}
          />
        )}
      />
    </>
  );
};
