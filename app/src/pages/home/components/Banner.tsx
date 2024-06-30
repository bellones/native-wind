import React from 'react'
import useBannerStore from '../../../stores/banner/useBannerStore'
import { BannerType } from '../../../types/banner/banner_type'
import { List } from '../../../utils/constants'
import { BannerItem } from './BannerItem'

export const Banner: React.FC = () => {

   const {banners} = useBannerStore();

   return (
      <List
         className="flex-row ml-2"
         data={banners}
         keyExtractor={(item, index) => `${item}${index}`}
         renderItem={({ item }) => <BannerItem banner={item as BannerType} />}
         horizontal
         showsHorizontalScrollIndicator={false}
      />
   )
}
