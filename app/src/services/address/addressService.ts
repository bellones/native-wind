/* eslint-disable prettier/prettier */
import { addressCollection } from '..';
import { AddressType } from '../../types/address/address_type';

export const getAddress = async (userId: string) => {
  const address = await addressCollection.where('userId', '==', userId).get();
  const addressList: AddressType[] = await Promise.all( address.docs.map(async doc => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
    } as AddressType;
  }));
  return addressList;
};
export const getAddressById = async (addressId: string) => {
  const address = await addressCollection.doc(addressId).get();
  return address.data() as AddressType;
};
export const createAddress = async (address: AddressType) => {
  const add = await addressCollection.add(address);
  return await add.get();
};
export const updateAddress = async (address: AddressType) => {
  await addressCollection.doc(address.id).update(address);
  return await addressCollection.doc(address.id).get();
};
export const deleteAddress = async (id: string) => {
  return await addressCollection.doc(id).delete();
};
