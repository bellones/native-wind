// eslint-disable-next-line prettier/prettier
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './providers/navigation/stack/MainStack';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
