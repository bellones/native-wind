/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/outline';
import useAddressStore from '../../../stores/address/useAddressStore';
import { AddressType } from '../../../types/address/address_type';
import {
  Container,
  NormalText,
  Row,
  Title,
  backgroundColorAmber,
  styles,
} from '../../../utils/constants';
import { responsiveWidth } from '../../../utils/dimensions';

type Props = {
  address: AddressType;
};

export const AddressListItem: React.FC<Props> = ({address}) => {
  const formatedAddress = `${address?.street}, ${address?.number}`;
  const formatedNeighborhood = `${address?.neighborhood}, ${address?.city} - ${address?.state}`;
  const {setSelectedAddress, setVisible, selectedAddress} = useAddressStore();

  const handleSelectedAddress = () => {
    setSelectedAddress(address);
    setVisible(false);
  };

  return (
    <Pressable onPress={handleSelectedAddress}>
      <Row className="flex-row mb-4 items-center mt-2">
        <MapPinIcon
          color={
            selectedAddress && selectedAddress.id === address.id ? backgroundColorAmber : 'black'
          }
          size={responsiveWidth(8)}
        />
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
