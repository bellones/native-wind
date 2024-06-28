
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Background, SafeContainer } from '../../../utils/constants';
import { AddressHomeTile } from './AddressHomeTile';
import { AddressModal } from './AddressModal';
import { Banner } from './Banner';
import { Categories } from './Categories';
import { CategoryHome } from './CategoryHome';

export const HomeComponent: React.FC = () => {

  return (
    <Background className="flex-1 bg-white h-full">
      <SafeContainer>
        <KeyboardAwareScrollView
          scrollEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}>
          <AddressHomeTile />
          <Banner />
          <Categories />
          <CategoryHome />
          <AddressModal/>
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
