/* eslint-disable prettier/prettier */
import { styled } from 'nativewind';
import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { responsiveHeight, responsiveWidth } from './dimensions';

export const Background = styled(View);
export const Container = styled(View);
export const SafeContainer = styled(SafeAreaView);
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
  backText: {
    fontSize: responsiveWidth(6),
  },
  normaltext : {
    fontSize: responsiveWidth(3.2),
    fontWeight: 'normal',
  },
  callText : {
    fontSize: responsiveWidth(3.6),

  },
  errorMessage: {
    color: 'red',
    fontSize: responsiveWidth(3.2),
  },
  rigthIcon : {
    color: 'gray',
    marginRight: 12,
    height: responsiveHeight(2),
    width: responsiveWidth(2),
  },
  backIcon: {
    width: responsiveWidth(6),
    color: 'black',
  },

  paddingGlobal: {
    padding: responsiveHeight(2),
  },
  globalWidth: {
    width: responsiveWidth(91),
  },
  normalWidth: {
    width: responsiveWidth(78),
  },
  categoriesHeight: {
    height: 64,
  },
  categoryActive : {
    fontSize : 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFC107',
  },
  categoryInactive : {
    fontSize : 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(0,0,0,0.6)',
  },
  categoryItemHeight: {
    height: 42,
  },



});
export const logo = require('../assets/images/logo.png');
export const backgroundColorAmber = '#FFC107';
export const NormalText = styled(Animated.Text);
export const Inputbox = styled(View);
export const InputContainer = styled(View);
export const Input = styled(TextInput);
export const Button = styled(TouchableOpacity);
export const Avatar = styled(Image);
export const IconButton =  styled(Pressable);
export const List = styled(FlatList);
export const BannerImage  = styled(Image);
export const Loading = styled(ActivityIndicator);
export const HomeCategory = styled(View);
export const CategoryItem = styled(TouchableOpacity);
export const CategoryText = styled(Text);
