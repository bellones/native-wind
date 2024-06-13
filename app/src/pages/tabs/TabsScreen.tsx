import React from 'react';
// eslint-disable-next-line prettier/prettier
import { AppStatusBar } from '../../components/StatusBar';
// eslint-disable-next-line prettier/prettier
import { TabsContainer } from '../../providers/navigation/tabs/TabsContainer';

export const TabsScreen: React.FC = () => {
  return (
    <>
      <AppStatusBar />
      <TabsContainer />
    </>
  );
};
