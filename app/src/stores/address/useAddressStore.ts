/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { AddressType } from '../../types/address/address_type';
export type AddressStore = {
  addresses: AddressType[] | null;
  setAddress: (addresses: AddressType[]) => void;
  setSelectedAddress: (address: AddressType) => void;
  selectedAddress: AddressType | null;
};

const useAddressStore = create<AddressStore>(set => ({
  addresses: null,
  setAddress: addresses => set({addresses}),
  selectedAddress: null,
  setSelectedAddress: address => set({selectedAddress: address}),
}));
export default useAddressStore;
