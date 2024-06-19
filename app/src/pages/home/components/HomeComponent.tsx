/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Background, SafeContainer } from '../../../utils/constants';
import { Banner } from './Banner';
import { UserHomeTile } from './UserHomeTile';



export const HomeComponent: React.FC = () => {

  return (
    <Background className="flex-1 bg-white h-full">
      <SafeContainer>
        <KeyboardAwareScrollView
          scrollEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}>
          <UserHomeTile />
          <Banner />
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
