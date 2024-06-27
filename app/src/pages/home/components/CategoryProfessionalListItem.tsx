
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
    <Container className="w-36 justify-center mb-4 ml-2 mr-2">
      <CommonImage
        source={{uri: professional?.image,
         priority: FastImage.priority.normal,

        }}
        resizeMode={FastImage.resizeMode.cover}
        className="w-36 h-40 rounded-md  "
      />
      <Title className="text-md font-semibold text-black mt-2" style={styles.poppinsSemiBold}>
        {professional?.name && professional?.name?.length > 15 ? professional?.name.substring(0, 15) + '...' : professional?.name}
      </Title>
      <NormalText className="text-sm text-gray-500" style={styles.poppinsRegular}>
        {professional?.speciality}
      </NormalText>
    </Container>
  );
};
