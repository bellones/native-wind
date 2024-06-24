/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { LockClosedIcon, LockOpenIcon } from 'react-native-heroicons/outline';
import useCreateAccountViewModel from '../../../hooks/create-account/useCreateAccountViewModel';
import { CreateAccountFormType } from '../../../types/create_account/create_account_form_type';
import {
  Button,
  Container,
  Input,
  InputContainer,
  Inputbox,
  NormalText,
  styles,
} from '../../../utils/constants';
import { SCHEMA } from '../validations';

export const CreateAccountForm: React.FC = () => {
  const {control, handleSubmit, formState} = useForm<CreateAccountFormType>({
    resolver: yupResolver(SCHEMA) as any,
  });

  const {
    handleVisible,
    isVisible,
    isConfirmationVisible,
    handleConfirmationVisible,
    handleRegister,
    isLoading,
  } = useCreateAccountViewModel(handleSubmit);
  return (
    <Container className="flex" style={styles.globalWidth}>
      <InputContainer className="flex mb-4">
        <NormalText
          className="text-black mb-1 ml-1"
          style={[styles.callText, styles.poppinsRegular]}>
          Email:
        </NormalText>
        <Inputbox
          className="flex-row bg-neutral-100 items-center rounded-xl mb-4 h-12">
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <Input
                  className="flex-1 ml-2 text-black"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  placeholderTextColor={'gray'}
                  autoCapitalize="none"
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
      <InputContainer className="flex mb-4">
        <NormalText
          className="text-black mb-1 ml-1"
          style={[styles.callText, styles.poppinsRegular]}>
          Senha:
        </NormalText>
        <Inputbox
          className="flex-row bg-neutral-100 items-center rounded-xl mb-4 h-12">
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <Input
                  className="flex-1 ml-2 text-black"
                  keyboardType="default"
                  placeholderTextColor={'gray'}
                  secureTextEntry={isVisible}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite sua senha"
                  style={[styles.poppinsRegular, styles.normaltext]}
                />
                <Pressable onPress={handleVisible}>
                  {isVisible ? (
                    <LockClosedIcon style={styles.rigthIcon} />
                  ) : (
                    <LockOpenIcon style={styles.rigthIcon} />
                  )}
                </Pressable>
              </>
            )}
            name="password"
            defaultValue=""
          />
        </Inputbox>
        {!!formState.errors.password && (
          <Text style={styles.errorMessage}>
            {formState.errors.password.message}
          </Text>
        )}
      </InputContainer>

      <InputContainer className="flex mb-4">
        <NormalText
          className="text-black mb-1 ml-1 "
          style={[styles.callText, styles.poppinsRegular]}>
          Confirme sua Senha:
        </NormalText>
        <Inputbox
          className="flex-row bg-neutral-100 items-center rounded-xl mb-4 h-12">
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <Input
                  className="flex-1 ml-2 text-black"
                  keyboardType="default"
                  placeholderTextColor={'gray'}
                  secureTextEntry={isConfirmationVisible}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirme sua senha"
                  style={[styles.poppinsRegular, styles.normaltext]}
                />
                <Pressable onPress={handleConfirmationVisible}>
                  {isConfirmationVisible ? (
                    <LockClosedIcon style={styles.rigthIcon} />
                  ) : (
                    <LockOpenIcon style={styles.rigthIcon} />
                  )}
                </Pressable>
              </>
            )}
            name="confirmPassword"
            defaultValue=""
          />
        </Inputbox>
        {!!formState.errors.confirmPassword && (
          <Text style={styles.errorMessage}>
            {formState.errors.confirmPassword.message}
          </Text>
        )}
      </InputContainer>
      <Button
        className="bg-amber-500 rounded-xl h-12 items-center justify-center mt-4 "
        onPress={handleRegister}>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <NormalText
            className="text-white"
            style={[styles.callText, styles.poppinsBold]}>
            REGISTRAR
          </NormalText>
        )}
      </Button>
    </Container>
  );
};
