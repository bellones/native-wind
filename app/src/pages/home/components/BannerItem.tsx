/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable } from 'react-native';
import { BannerType } from '../../../types/banner/banner_type';
import { BannerImage } from '../../../utils/constants';

type Props = {
  banner: BannerType;
};

export const BannerItem: React.FC<Props> = ({banner}) => {
  const handlePress = () => {};
  return (
    <Pressable onPress={handlePress}>
      <BannerImage
        alt="Banner"
        className="w-80 h-40 mr-4 rounded-xl"
        source={{uri: banner.image}}
      />
    </Pressable>
  );
};
