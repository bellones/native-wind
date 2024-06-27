
import { ProfessionalType } from '../professional/professional_type';

export type CategoryType = {
  addedItem: Promise<ProfessionalType[]>;
  id: string;
  name: string;
  // image: string;
  active: boolean;
  professionals?: ProfessionalType[];
};
