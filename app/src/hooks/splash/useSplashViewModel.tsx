/* eslint-disable prettier/prettier */
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { responsiveHeight } from '../../utils/dimensions';

const useSplashViewModel = () => {
  const scaleRingOne = useSharedValue(0);
  const scaleRingTwo = useSharedValue(0);
  const scaleLogo = useSharedValue(0);

  const load = async () => {
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
  };

  return {scaleRingOne, scaleRingTwo, scaleLogo, load};
};

export default useSplashViewModel;
