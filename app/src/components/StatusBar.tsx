/* eslint-disable prettier/prettier */
import { React } from 'react';
import { StatusBar } from 'react-native';

import { StatusBarStyle } from 'react-native';

interface IAppStatusBar {
  backgroundColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
}

export const AppStatusBar = ({backgroundColor, barStyle}: IAppStatusBar) => {
  return (
    <StatusBar
      backgroundColor={
        backgroundColor !== undefined ? backgroundColor : 'white'
      }
      barStyle={
        barStyle !== undefined ? barStyle : 'dark-content'
      }
    />
  );
};
