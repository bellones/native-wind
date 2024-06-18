/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useUserStore from '../../stores/user/userStore';
import { Background, SafeContainer, styles } from '../../utils/constants';

export const HomeScreen: React.FC = () => {

  const user = useUserStore(state => state.user);
  console.log(user);

  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
        <KeyboardAwareScrollView scrollEnabled horizontal={false} showsVerticalScrollIndicator={false}>
        <View>
          <Text>Batat</Text>
        </View>
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
