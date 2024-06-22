export type ProfessionalType = {
  id: string;
  name: string;
  authId: string;
  speciality: string;
  image: string;
  active: boolean;
  phone: string;
  categories?: ProfessionalCategoryType[] | null;
  ratings?: ProfessionalRatingType[] | null;
};

export type ProfessionalCategoryType = {
  id: string;
  professionalId: string;
  categoryId: string;
};

export type ProfessionalRatingType = {
  id: string;
  professionalId: string;
  profileId: string;
  rating: number;
  comment: string;
};
