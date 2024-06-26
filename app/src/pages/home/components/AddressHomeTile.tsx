/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/outline';
import useAddressStore from '../../../stores/address/useAddressStore';
import {
  Container,
  NormalText,
  Row,
  Title,
  backgroundColorAmber,
  styles,
} from '../../../utils/constants';
import { responsiveWidth } from '../../../utils/dimensions';

export const AddressHomeTile: React.FC = () => {
  const selectedAddress = useAddressStore(state => state.selectedAddress);
  const setVisible = useAddressStore(state => state.setVisible);
  const formatedAddress = `${selectedAddress?.street}, ${selectedAddress?.number}, ${selectedAddress?.complement}`;
  const formatedNeighborhood = `${selectedAddress?.neighborhood}, ${selectedAddress?.city} - ${selectedAddress?.state}`;

  const handleVisible = () => {
    setVisible(true);
  };

  return (
    <Pressable onPress={handleVisible}>
      <Row className="flex-row mb-4 items-center mx-2 mt-2">
        <MapPinIcon color={backgroundColorAmber} size={responsiveWidth(8)} />
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
    </Pressable>
  );
};
