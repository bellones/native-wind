/* eslint-disable prettier/prettier */
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { getCurrentUser } from '../../services/user/userService';
import { responsiveHeight } from '../../utils/dimensions';

const useSplashViewModel = () => {
  const scaleRingOne = useSharedValue(0);
  const scaleRingTwo = useSharedValue(0);
  const scaleLogo = useSharedValue(0);
  const navigation = useNavigation();

  const intervalOne = setTimeout(() => {
    scaleRingOne.value = withSpring(scaleRingOne.value + responsiveHeight(5));
  }, 100);

  const intervalTwo = setTimeout(() => {
    scaleLogo.value = withSpring(scaleLogo.value + responsiveHeight(24));
  }, 200);
  const intervalThree = setTimeout(() => {
    scaleRingTwo.value = withSpring(scaleRingTwo.value + responsiveHeight(5.5));
  }, 300);

  const navigateTo = setTimeout(async () => {
    const user = await getCurrentUser();
    user ? handleNavigate('Tabs') : handleNavigate('Login');
  }, 2000);

  const handleNavigate = (route: string) => {
    navigation.dispatch(
      StackActions.replace(route)
    );
  };

  useEffect(() => {
    const load = async () => {
      scaleRingOne.value = 0;
      scaleRingTwo.value = 0;
      scaleLogo.value = 0;
      intervalOne;
      intervalTwo;
      intervalThree;
      navigateTo;
    };
    load();
    return () => {
      const timeoutsToClear = [
        intervalOne,
        intervalTwo,
        intervalThree,
        navigateTo,
      ];

      timeoutsToClear.flatMap(timeoutId => {
        clearTimeout(timeoutId);
      });
    };
  }, [
    intervalOne,
    intervalThree,
    intervalTwo,
    navigateTo,
    scaleLogo,
    scaleRingOne,
    scaleRingTwo,
  ]);

  return {scaleRingOne, scaleRingTwo, scaleLogo};
};

export default useSplashViewModel;
