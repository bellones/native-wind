/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { BackButton } from '../../components/BackButton';
import {
  Background,
  NormalText,
  SafeContainer,
  Title,
  styles,
} from '../../utils/constants';
import { CreateAccountForm } from './components/CreateAccountForm';

export const CreateAccountScreen: React.FC = () => {
  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
        <BackButton />
        <ScrollView scrollEnabled horizontal={false}>
          <Title
            className="text-amber-500 mt-2"
            style={[styles.poppinsRegular, styles.upperText]}>
            Crie sua conta
          </Title>
          <NormalText className="text-neutral-600 mb-4">
            Preencha os campos abaixo para criar sua conta
          </NormalText>
          <CreateAccountForm />
        </ScrollView>
      </SafeContainer>
    </Background>
  );
};
