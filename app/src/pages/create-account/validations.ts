import * as Yup from 'yup';

export const FIELD_VALIDATION = {
  email: Yup.string()
    .email(() => 'Preencha corretamente o Email')
    .required(() => 'Preencha esse campo'),
  password: Yup.string()
    .required(() => 'Preencha esse campo')
    .min(8, 'A senha deve conter pelo menos 8 dígitos')
    .max(20, 'A senha deve conter no máximo de 20 dígitos'),
  confirmPassword: Yup.string()
    .required(() => 'Preencha esse campo')
    .min(8, 'A senha deve conter pelo menos 8 dígitos')
    .max(20, 'A senha deve conter no máximo de 20 dígitos')
    .oneOf([Yup.ref('password')], 'As senhas não coincidem'),
};

export const SCHEMA = Yup.object().shape({
  email: FIELD_VALIDATION.email,
  password: FIELD_VALIDATION.password,
  confirmPassword: FIELD_VALIDATION.confirmPassword,
});
