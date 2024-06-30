
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useHomeViewModel from '../../hooks/home/useHomeViewModel';
import {
  Background,
  SafeContainer,
} from '../../utils/constants';
import { HomeComponent } from './components/HomeComponent';
import { HomeLoading } from './components/HomeLoading';

export const HomeScreen: React.FC = () => {

  const {isLoading} = useHomeViewModel();
  return (
    <Background className={'flex-1 bg-white h-full'}>
      <SafeContainer>
        <KeyboardAwareScrollView
          scrollEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}>
           {
             isLoading ? <HomeLoading /> : <HomeComponent />
           }
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
