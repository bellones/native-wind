/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useHomeViewModel from '../../hooks/home/useHomeViewModel';
import { Background, SafeContainer, styles } from '../../utils/constants';
import { UserHomeTile } from './components/UserHomeTile';

export const HomeScreen: React.FC = () => {
  const  {
    userItemStore,
  } = useHomeViewModel();
  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
        <KeyboardAwareScrollView scrollEnabled horizontal={false} showsVerticalScrollIndicator={false}>
          <UserHomeTile user={userItemStore} />
          </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
