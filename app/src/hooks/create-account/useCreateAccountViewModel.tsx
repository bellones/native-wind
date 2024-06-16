/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { CreateAccountFormType } from '../../types/create_account/create_account_form_type';
import { useLoadingRequest } from '../../utils/useLoadingRequest';

const useCreteAccountViewModel = (handleSubmit: UseFormHandleSubmit<CreateAccountFormType, undefined>) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(true);


  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleConfirmationVisible = () => {
    setIsConfirmationVisible(!isConfirmationVisible);
  };
  const {apiRequest: handleRegister, isLoading} = useLoadingRequest({
    apiFunc: handleSubmit( async (values: CreateAccountFormType) => {
      console.log('values', values);
    }),
    errorFunc: err => {
      console.log('err', err);
    },
  });

  return {
    isVisible,
    isConfirmationVisible,
    handleVisible,
    handleConfirmationVisible,
    handleRegister,
    isLoading,
  };
};
export default useCreteAccountViewModel;
