
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Background,
  SafeContainer,
} from '../../utils/constants';
import { HomeComponent } from './components/HomeComponent';

export const HomeScreen: React.FC = () => {
  return (
    <Background className={'flex-1 bg-white h-full'}>
      <SafeContainer>
        <KeyboardAwareScrollView
          scrollEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}>
           <HomeComponent />
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
