/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import useProfileViewModel from '../../hooks/profile/useProfileViewModel';
import { Background, Button, NormalText, SafeContainer, styles } from '../../utils/constants';
import { UserHomeTile } from '../home/components/UserHomeTile';

export const ProfileScreen: React.FC = () => {

  const {
  handleLogoff, isLoading,
  } = useProfileViewModel();
  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
      <UserHomeTile />
        <View>
        <Button
        className="bg-amber-500 rounded-xl h-12 items-center justify-center mt-8 "
        onPress={handleLogoff}>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <NormalText
            className="text-white"
            style={[styles.callText, styles.poppinsBold]}>
            Sair
          </NormalText>
        )}
      </Button>
        </View>
      </SafeContainer>
    </Background>
  );
};
