
import React from 'react';
import Animated from 'react-native-reanimated';
import { AppStatusBar } from '../../components/StatusBar';
import useSplashViewModel from '../../hooks/splash/useSplashViewModel';
import {
  Background,
  Logo,
  NormalText,
  RingOne,
  RingTwo,
  Row,
  Title,
  backgroundColorAmber,
  logo,
  styles,
} from '../../utils/constants';

export const SplashScreen: React.FC = () => {

  const {
    scaleRingOne,
    scaleRingTwo,
    scaleLogo,
  } = useSplashViewModel();

  return (
    <Background className="flex-1 justify-center items-center bg-amber-400 h-full">
      <Animated.View>
        <AppStatusBar backgroundColor={backgroundColorAmber} />

        <Row className="flex justify-center items-center flex-row mb-8">
          <Title className="text-black" style={[styles.poppinsRegular, styles.titletext]}>
            Jampa
          </Title>
          <Title className="text-white" style={[styles.poppinsRegular, styles.titletext]}>
            Services
          </Title>
        </Row>
        <RingOne
          className="bg-white/20 rounded-full"
          style={{padding: scaleRingTwo}}>
          <RingTwo
            className="bg-white/20 rounded-full"
            style={{padding: scaleRingOne}}>
            <Logo
              source={logo}
              className="align-middle"
              style={{height: scaleLogo, width: scaleLogo}}
            />
          </RingTwo>
        </RingOne>

        <NormalText
          className="text-black text-3xl text-center mt-8"
          style={[styles.poppinsSemiBold, styles.upperText]}>
          Procurou? achou!
        </NormalText>
        <Row className="flex justify-center items-center flex-row mb-8">
          <NormalText
            className="text-black text-md text-center mt-4 mr-1"
            style={[styles.poppinsMedium, styles.normaltext]}>
            Todos os tipos de profissionais
          </NormalText>

          <NormalText
            className="text-white text-md text-center mt-4"
            style={[styles.poppinsBold, styles.normaltext]}>
            em um só lugar
          </NormalText>
        </Row>
      </Animated.View>
    </Background>
  );
};
