/* eslint-disable prettier/prettier */
import React from 'react';

import { ActivityIndicator } from 'react-native';
import { backgroundColorAmber } from '../../../utils/constants';
export const HomeLoading: React.FC = () => {

  return (
        <>
          <ActivityIndicator size="large" color={backgroundColorAmber} />
        </>
  );
};
