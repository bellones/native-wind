/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppStatusBar } from '../../components/StatusBar';
import {
  Background,
  Logo,
  Row,
  SafeContainer,
  Title,
  logo,
  styles,
} from '../../utils/constants';
import { responsiveHeight, responsiveWidth } from '../../utils/dimensions';
import { LoginForm } from './components/LoginForm';

export const LoginScreen: React.FC = () => {
  return (
  <Background className="flex-1 justify-center items-center bg-white h-full" style={styles.paddingGlobal}>
      <AppStatusBar />
      <KeyboardAwareScrollView scrollEnabled horizontal={false} showsVerticalScrollIndicator={false}>
        <SafeContainer className="justify-center items-center">
          <Row className="justify-center items-center flex-row mb-8 mt-8">
            <Title
              className="text-black"
              style={[styles.poppinsRegular, styles.upperText]}>
              Jampa
            </Title>
            <Title
              className="text-amber-400"
              style={[styles.poppinsRegular, styles.upperText]}>
              Services
            </Title>
          </Row>
          <Logo
            source={logo}
            className="align-middle"
            style={{height: responsiveHeight(11), width: responsiveWidth(32)}}
          />
          <LoginForm />
        </SafeContainer>
      </KeyboardAwareScrollView>
    </Background>
  );
};
