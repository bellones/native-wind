/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useHomeViewModel from '../../hooks/home/useHomeViewModel';
import {
  Background,
  SafeContainer,
} from '../../utils/constants';
import { HomeComponent } from './components/HomeComponent';
import { HomeLoading } from './components/HomeLoading';

export const HomeScreen: React.FC = () => {

  const [loading, seLoading] = useState(false);
  const { categories } = useHomeViewModel();

  useEffect(() => {
    let mounted = true;
    if(mounted){
      seLoading(true);
      categories().then(() => {
        seLoading(false);
      });
    }
    return () => {

      mounted = false;
    };

  }, [categories]);

  return (
    <Background className={'flex-1 bg-white h-full'}>
      <SafeContainer>
        <KeyboardAwareScrollView
          scrollEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}>
            {
              loading ? <HomeLoading /> : <HomeComponent />
            }

        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
