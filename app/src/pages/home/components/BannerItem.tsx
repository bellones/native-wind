/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
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
        className="w-80 h-40 mr-2 rounded-xl"
        source={{uri: banner.image, priority: FastImage.priority.normal}}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Pressable>
  );
};
