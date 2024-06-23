/* eslint-disable prettier/prettier */
import React from 'react';
import FastImage from 'react-native-fast-image';
import { ProfessionalType } from '../../../types/professional/professional_type';
import { CommonImage, Container, NormalText, Title, styles } from '../../../utils/constants';

type Props = {
  professional: ProfessionalType | null;
};

export const CategoryProfessionalListItem: React.FC<Props> = ({
  professional,
}) => {
  return (
    <Container className="w-40 justify-center mb-4">
      <CommonImage
        source={{uri: professional?.image,priority: FastImage.priority.normal}}
        resizeMode={FastImage.resizeMode.contain}
        className="w-36 h-48 rounded-md mx-4"
      />
      <Title className="text-md font-semibold text-black mt-2 ml-4" style={styles.poppinsSemiBold}>
        {professional?.name}
      </Title>
      <NormalText className="text-sm text-gray-500 ml-4" style={styles.poppinsRegular}>
        {professional?.speciality}
      </NormalText>
    </Container>
  );
};
