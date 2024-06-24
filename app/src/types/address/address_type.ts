export type AddressType = {
  id: string;
  active: boolean;
  city: string;
  complement: string;
  location: Location;
  main: boolean;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  userId: string;
};

export type Location = {
  latitude: number;
  longitude: number;
};
