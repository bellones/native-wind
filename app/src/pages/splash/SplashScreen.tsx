import React, { useEffect } from 'react';

import { AppStatusBar } from '../../components/StatusBar';

import Animated, {
  FadeIn,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { responsiveHeight } from '../../utils/dimensions';
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
} from './hooks/constants';

export const SplashScreen: React.FC = () => {
  const scaleRingOne = useSharedValue(0);
  const scaleRingTwo = useSharedValue(0);
  const scaleLogo = useSharedValue(0);

  useEffect(() => {
    scaleRingOne.value = 0;
    scaleRingTwo.value = 0;
    scaleLogo.value = 0;
    setTimeout(() => {
      scaleRingOne.value = withSpring(scaleRingOne.value + responsiveHeight(5));
    }, 100);
    setTimeout(() => {
      scaleLogo.value = withSpring(scaleLogo.value + responsiveHeight(24));
    }, 200);
    setTimeout(() => {
      scaleRingTwo.value = withSpring(
        scaleRingTwo.value + responsiveHeight(5.5),
      );
    }, 300);
  }, [scaleRingOne, scaleRingTwo, scaleLogo]);

  return (
    <Background className="flex-1 justify-center items-center bg-amber-400 h-full">
      <Animated.View>
        <AppStatusBar backgroundColor={backgroundColorAmber} />

        <Row className="flex justify-center items-center flex-row mb-8">
          <Title className="text-black text-4xl" style={styles.poppinsBold}>
            Jampa
          </Title>
          <Title className="text-white text-4xl" style={styles.poppinsBold}>
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
          entering={FadeIn}
          className="text-white text-4xl text-center mt-8"
          style={styles.poppinsSemiBold}>
          Procurou? achou!
        </NormalText>
        <NormalText
          className="text-black text-sm text-center mt-4"
          style={styles.poppinsMedium}>
          Todos os tipos de profissionais em um só lugar
        </NormalText>
      </Animated.View>
    </Background>
  );
};
