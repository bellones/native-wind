/* eslint-disable prettier/prettier */
import { and, or, query, where } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { professionalCategoryCollection, professionalCollection } from '..';
import { CategoryType } from '../../types/category/category_type';
import { ProfessionalCategoryType, ProfessionalType } from '../../types/professional/professional_type';

export const createProfessional = async (professional: ProfessionalType) => {
   const add =  await professionalCollection.add(professional);
    return await add.get();
};

export const updateProfessional = async (professional: ProfessionalType) => {
    await professionalCollection.doc(professional.id).update(professional);
    return await professionalCollection.doc(professional.id).get();
};

export const getProfessional = async (id: string) => {
    return await professionalCollection.doc(id).get();
};

export const getProfessionals = async () => {
    const professionals = await professionalCollection.get();
    return professionals.docs.map(professional => professional.data() as ProfessionalType);
};

export const deleteProfessional = async (id: string) => {
    return await professionalCollection.doc(id).delete();
};

export const getProfessionalByCategory = async (categoryId: string): Promise<ProfessionalType[]> => {
  const professionalsIdsSnapshot = await professionalCategoryCollection
  .where('categoryId', '==', categoryId)
  .get();
  const professionalsIdsData = professionalsIdsSnapshot.docs.map(
    (doc) => doc.data() as ProfessionalCategoryType
  );
  const professionalPromises = professionalsIdsData.map((professional) =>
    professionalCollection.doc(professional.professionalId).get()
  );
  const itemData = await Promise.all(professionalPromises);
  return itemData.map((item) => item.data() as ProfessionalType);
};

export const getProfessionalListHome = async (categories: CategoryType[]) :Promise<CategoryType[]> => {

const data =  categories.map(async (category) => {
  const professionals = await professionalCollection.where('speciality', '==', category.name).get();
  category.professionals = professionals.docs.map(professional => professional.data() as ProfessionalType);
  return category;
});

return await Promise.all(data);

};

export const getProfessionalBySpeciality = async (speciality: string) => {
    const professionals = await professionalCollection.where('speciality', '==', speciality).get();
    return professionals.docs.map(professional => professional.data() as ProfessionalType);
};

export const getProfessionalByAuthId = async (authId: string) => {
    const professionals = await professionalCollection.where('authId', '==', authId).get();
    return professionals.docs.map(professional => professional.data() as ProfessionalType);
};

export const getProfessionalByName = async (name: string) => {
    const professionals = await query(professionalCollection,
        or(
            // query as-is:
            and(
              where('name', '>=', name),
              where('name', '<=', name + '\uf8ff')
            ),
            // capitalize first letter:
            and(
              where('name', '>=', name.charAt(0).toUpperCase() + name.slice(1)),
              where('name', '<=', name.charAt(0).toUpperCase() + name.slice(1) + '\uf8ff')
            ),
            // lowercase:
            and(
              where('name', '>=', name.toLowerCase()),
              where('name', '<=', name.toLowerCase() + '\uf8ff')
            )
          )
    ).get();
    return professionals.docs.map(professional => professional.data() as ProfessionalType);
};

export const updateProfessionalPhoto = async () => {
  const professionals = await professionalCollection.get();
  professionals.docs.map(async professional => {
    const data = professional.data() as ProfessionalType;
    if (data.image) {
      const photo = await storage().ref(`professional/${data.image}`).getDownloadURL();
      await professionalCollection.doc(professional.id).update({photo});
    }
  });
};

export const updateProfessionalPhotoDummy = async () => {
  const professionals = await professionalCollection.get();
  professionals.docs.map(async (professional, index) => {
    const data = professional.data() as ProfessionalType;
    if (data.image) {
      const image = index < 10 ? `https://i.pravatar.cc/20${index}` : `https://i.pravatar.cc/2${index}`;
      await professionalCollection.doc(professional.id).update({image});
    }
  });
};
