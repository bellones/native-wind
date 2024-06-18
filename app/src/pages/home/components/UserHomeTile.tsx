/* eslint-disable prettier/prettier */
import React from 'react';
import { BellIcon } from 'react-native-heroicons/outline';
import { UserType } from '../../../types/user/user_type';
import {
    Avatar,
    Container,
    IconButton,
    NormalText,
    Row,
    Title,
    styles,
} from '../../../utils/constants';
import { responsiveWidth } from '../../../utils/dimensions';

interface Props {
  user: UserType | null;
}

export const UserHomeTile = ({user}: Props) => {
  return (
    <Row className="flex-row mb-8 mt-2 items-center">
      <Avatar
        className="rounded-full w-12 h-12"
        source={{
          uri:
            user?.photo ??
            'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        }}
      />
      <Container style={styles.normalWidth}>
        <Title
          className="text-xl text-amber-500 ml-2"
          style={styles.poppinsRegular}>
          {user?.name ?? 'Usuário jampa'}
        </Title>
        <NormalText
          className="text-md ml-3 text-neutral-600"
          style={styles.poppinsSemiBold}>
          {user?.email ?? 'email@jampaservices.com.br'}
        </NormalText>
      </Container>
      <IconButton className="justify-end">
        <BellIcon color={'black'} size={responsiveWidth(6)} />
      </IconButton>
    </Row>
  );
};
