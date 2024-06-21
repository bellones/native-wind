/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { BannerType } from '../../types/banner/banner_type';

type BannerStore = {
  banners: BannerType[] | null;
  setBanners: (banners: BannerType[]) => void;
};

const useBannerStore = create<BannerStore>(set => ({
  banners: null,
  setBanners: banners => set( ({ banners })),
}));
export default useBannerStore;

