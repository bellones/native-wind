/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { getCurrentUser } from '../../services/user/userService';
import { responsiveHeight } from '../../utils/dimensions';
import useHomeViewModel from '../home/useHomeViewModel';

const useSplashViewModel = () => {
  const scaleRingOne = useSharedValue(0);
  const scaleRingTwo = useSharedValue(0);
  const scaleLogo = useSharedValue(0);
  const navigation = useNavigation();

  const {initialize} = useHomeViewModel();

  const intervalOne = setTimeout(() => {
   scaleRingOne.value < 30 ?  scaleRingOne.value = withSpring(scaleRingOne.value + responsiveHeight(3)) : scaleRingOne.value = 30;
  }, 100);
  const intervalTwo = setTimeout(() => {
    scaleLogo.value < 192 ? scaleLogo.value = withSpring(scaleLogo.value + responsiveHeight(10)) :  scaleLogo.value = 192;
  }, 200);
  const intervalThree = setTimeout(() => {
    scaleRingTwo.value < 50 ?  scaleRingTwo.value = withSpring(scaleRingTwo.value + responsiveHeight(4)) : scaleRingTwo.value = 50;
  }, 300);



  useEffect(() => {
    const navigateTo = async () => {
      scaleRingOne.value = 0;
      scaleRingTwo.value = 0;
      scaleLogo.value = 0;
      intervalOne;
      intervalTwo;
      intervalThree;
      const user = await getCurrentUser();

      if(!user) {
        navigation.dispatch(
          StackActions.replace('Login')
        );
      } else {
        await initialize();
        navigation.dispatch(
          StackActions.replace('Tabs')
        );
      }
    };
    navigateTo();
    return () => {
      const timeoutsToClear = [
        intervalOne,
        intervalTwo,
        intervalThree,
      ];

      timeoutsToClear.flatMap(timeoutId => {
        clearTimeout(timeoutId);
      });
    };
  }, []);

  return {scaleRingOne, scaleRingTwo, scaleLogo};
};

export default useSplashViewModel;
