import * as Yup from 'yup';

export const FIELD_VALIDATION = {
  email: Yup.string()
    .email(() => 'Preencha corretamente o Email')
    .required(() => 'Preencha esse campo'),
};

export const SCHEMA = Yup.object().shape({
  email: FIELD_VALIDATION.email,
});
