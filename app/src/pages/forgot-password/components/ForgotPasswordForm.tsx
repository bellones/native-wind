/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Text } from 'react-native';
import useForgotPasswordViewModel from '../../../hooks/forgot-password/useForgotPasswordViewModel';
import { ForgotPassFormType } from '../../../types/recoverpass/recover_pass_form_type';
import {
    Button,
    Container,
    Input,
    InputContainer,
    Inputbox,
    NormalText,
    styles,
} from '../../../utils/constants';
import { responsiveHeight } from '../../../utils/dimensions';
import { SCHEMA } from '../validations';

const ForgotPasswordForm: React.FC = () => {
  const {control, handleSubmit, formState} = useForm<ForgotPassFormType>({
    resolver: yupResolver(SCHEMA) as any,
  });
  const {handleRecover, isLoading} = useForgotPasswordViewModel(handleSubmit);

  return (
    <Container className="flex" style={styles.globalWidth}>
      <InputContainer className="flex mb-4">
        <NormalText
          className="text-black mb-1 ml-1"
          style={[styles.callText, styles.poppinsRegular]}>
          Email:
        </NormalText>
        <Inputbox
          className="flex-row bg-neutral-100 items-center rounded-xl mb-4"
          style={{height: responsiveHeight(6)}}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <Input
                  className="flex-1 p-4"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite seu email"
                  style={[styles.poppinsRegular, styles.normaltext]}
                />
              </>
            )}
            name="email"
            defaultValue=""
          />
        </Inputbox>
        {!!formState.errors.email && (
          <Text style={styles.errorMessage}>
            {formState.errors.email.message}
          </Text>
        )}
      </InputContainer>
      <Button
        className="bg-amber-500 rounded-xl h-14 items-center justify-center mt-8 "
        onPress={handleRecover}>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <NormalText
            className="text-white"
            style={[styles.callText, styles.poppinsBold]}>
            RECUPERAR SENHA
          </NormalText>
        )}
      </Button>
    </Container>
  );
};

export default ForgotPasswordForm;
