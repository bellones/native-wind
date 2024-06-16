/* eslint-disable prettier/prettier */
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const responsiveWidth = (width: number) => wp(width);
export const responsiveHeight = (height: number) => hp(height);
