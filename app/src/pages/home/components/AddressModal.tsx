/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { AppStatusBar } from '../../../components/StatusBar';
import useAddressStore from '../../../stores/address/useAddressStore';
import {
    Container,
    IconButton,
    Row,
    Title,
    styles,
} from '../../../utils/constants';

export const AddressModal: React.FC = () => {
  const {visible, setVisible} = useAddressStore();
  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <>
      <AppStatusBar barStyle={visible ? 'light-content' : 'dark-content'} />
      <Modal
        visible={visible}
        animationType="slide"
        onDismiss={handleDismiss}
        presentationStyle="pageSheet">
        <SafeAreaView>
          <Container style={styles.paddingGlobal}>
            <Row className="flex-row mb-4 items-center mt-2 justify-between">
              <Title
                className="text-2xl text-black"
                style={styles.poppinsSemiBold}>
                Seus Endereços
              </Title>
              <IconButton onPress={handleDismiss}>
                <XMarkIcon size={24} color={'black'} />
              </IconButton>
            </Row>
          </Container>
        </SafeAreaView>
      </Modal>
    </>
  );
};
