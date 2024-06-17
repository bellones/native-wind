export type UserType = {
  authId: string;
  email: string;
  document: string;
  name: string;
  photo: string;
  phone: string;
  type: UserEnum;
  id?: string;
  birth: string;
};

export enum UserEnum {
  CLIENT = 'client',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
  PROFESSIONAL = 'professional',
}
