
import React from 'react';
import { BellIcon } from 'react-native-heroicons/outline';
import useUserStore from '../../../stores/user/userStore';
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


export const UserHomeTile = () => {
  const {user} = useUserStore();
  return (
    <Row className="flex-row mt-2 items-center">
      <Avatar
        className="rounded-full w-10 h-10"
        source={{
          uri:
            user?.photo ??
            'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        }}
      />
      <Container style={styles.normalWidth}>
        <Title
          className="text-md text-amber-500 ml-2"
          style={styles.poppinsRegular}>
          {user?.name ?? 'Usuário jampa'}
        </Title>
        <NormalText
          className="text-xs ml-3 text-neutral-600"
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
