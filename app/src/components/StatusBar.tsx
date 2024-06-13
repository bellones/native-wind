/* eslint-disable prettier/prettier */
import { React } from 'react';
import { StatusBar } from 'react-native';

interface IAppStatusBar {
  backgroundColor?: string;
}

export const AppStatusBar = ({backgroundColor}: IAppStatusBar) => {
  return (
    <StatusBar
      backgroundColor={
        backgroundColor !== undefined ? backgroundColor : 'white'
      }
      barStyle="dark-content"
    />
  );
};
