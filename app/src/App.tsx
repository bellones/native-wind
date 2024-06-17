/* eslint-disable prettier/prettier */

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './providers/navigation/stack/MainStack';

const queryClient = new QueryClient();
const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <MainStack />
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
