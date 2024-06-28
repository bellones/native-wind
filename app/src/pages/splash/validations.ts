import * as Yup from 'yup';

export const FIELD_VALIDATION = {

  searchText: Yup.string()
    .required(() => 'Preencha esse campo')
    .min(3, 'Este campo deve ter no mínimo 3 caracteres')

};

export const SCHEMA = Yup.object().shape({
    searchText: FIELD_VALIDATION.searchText,
 
});