/* eslint-disable prettier/prettier */
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/outline';
import useAddressStore from '../../../stores/address/useAddressStore';
import {
    Container,
    IconButton,
    NormalText,
    Row,
    Title,
    backgroundColorAmber,
    styles,
} from '../../../utils/constants';
import { responsiveWidth } from '../../../utils/dimensions';

export const AddressHomeTile: React.FC = () => {
  const selectedAddress = useAddressStore(state => state.selectedAddress);
  const formatedAddress = `${selectedAddress?.street}, ${selectedAddress?.number}, ${selectedAddress?.complement}`;
  const formatedNeighborhood = `${selectedAddress?.neighborhood}, ${selectedAddress?.city} - ${selectedAddress?.state}`;
  return (
    <Row className="flex-row mb-2 items-center" style={styles.paddingGlobal}>
      <IconButton>
        <MapPinIcon color={backgroundColorAmber} size={responsiveWidth(8)} />
      </IconButton>
      <Container style={styles.normalWidth}>
        <Title className="text-md text-black ml-2" style={styles.poppinsBold}>
          {formatedAddress ?? 'Endereço não encontrado'}
        </Title>
        <NormalText
          className="text-xs ml-2 text-neutral-500"
          style={styles.poppinsSemiBold}>
          {formatedNeighborhood ?? 'Bairro não encontrado'}
        </NormalText>
      </Container>
    </Row>
  );
};
