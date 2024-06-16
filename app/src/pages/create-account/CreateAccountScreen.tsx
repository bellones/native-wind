import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {
  Background,
  NormalText,
  Row,
  SafeContainer,
  Title,
  styles,
} from '../../utils/constants';
import { responsiveWidth } from '../../utils/dimensions';
import { CreateAccountForm } from './components/CreateAccountForm';

export const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
        <Row className="justify-start items-center flex-row">
          <Pressable onPress={navigation.goBack}>
            <ChevronLeftIcon
              size={responsiveWidth(6)}
              style={styles.backIcon}
            />
          </Pressable>
        </Row>
        <ScrollView scrollEnabled horizontal={false}>
          <Title
            className="text-amber-500 mt-8"
            style={[styles.poppinsRegular, styles.upperText]}>
            Crie sua conta
          </Title>
          <NormalText className="text-neutral-600 mb-8">
            Preencha os campos abaixo para criar sua conta
          </NormalText>
          <CreateAccountForm />
        </ScrollView>
      </SafeContainer>
    </Background>
  );
};
