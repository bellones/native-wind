/* eslint-disable prettier/prettier */
import { styled } from 'nativewind';
import { StyleSheet, View } from 'react-native';

import Animated from 'react-native-reanimated';
import { responsiveWidth } from './dimensions';

export const Background = styled(View);
export const Title = styled(Animated.Text);
export const Logo = styled(Animated.Image);
export const Row = styled(View);
export const RingOne = styled(Animated.View);
export const RingTwo = styled(Animated.View);
export const styles = StyleSheet.create({
  poppinsRegular: {fontFamily: 'Poppins-Regular'},
  poppinsBold: {fontFamily: 'Poppins-Bold'},
  poppinsSemiBold: {fontFamily: 'Poppins-SemiBold'},
  poppinsMedium: {fontFamily: 'Poppins-Medium'},
  poppinsLight: {fontFamily: 'Poppins-Light'},
  poppinsExtraLight: {fontFamily: 'Poppins-ExtraLight'},
  poppinsThin: {fontFamily: 'Poppins-Thin'},
  poppinsItalic: {fontFamily: 'Poppins-Italic'},
  poppinsBoldItalic: {fontFamily: 'Poppins-BoldItalic'},
  centered : {alignSelf: 'center'},
  titletext : {
    fontSize: responsiveWidth(10),
    fontWeight: 'bold',
  },
  upperText: {
    fontSize: responsiveWidth(8),
  },
  normaltext : {
    fontSize: responsiveWidth(3.2),
    fontWeight: 'normal',
  },

});
export const logo = require('../assets/images/logo.png');
export const backgroundColorAmber = '#FFC107';
export const NormalText = styled(Animated.Text);
