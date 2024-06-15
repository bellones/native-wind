/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
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

  const navigateTo = setTimeout(() => {
    const user = auth().currentUser;
    console.log('user', user);
    if (user) {
      navigation.navigate('Tabs' as never);
      return;
    }
    navigation.navigate('Login' as never);
  }, 2000);

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

      timeoutsToClear.forEach(timeoutId => {
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
