/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Pressable, Text } from 'react-native';
import { LockClosedIcon, LockOpenIcon } from 'react-native-heroicons/outline';
import useLoginViewModel from '../../../hooks/login/useLoginViewModel';
import { LoginFormValuesType } from '../../../types/login/login_form_type';
import {
  Button,
  Container,
  Input,
  InputContainer,
  Inputbox,
  NormalText,
  Row,
  styles,
} from '../../../utils/constants';
import { responsiveHeight } from '../../../utils/dimensions';
import { SCHEMA } from '../validation';

export const LoginForm: React.FC = () => {
  const {control, handleSubmit, formState} = useForm<LoginFormValuesType>({
    resolver: yupResolver(SCHEMA) as any,
  });

  const {
    handleLogin,
    isLoading,
    handleVisible,
    isVisible,
    navigateToForgotPassword,
    navigateToRegister,
  } = useLoginViewModel(handleSubmit);
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
                  autoCapitalize="none"
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
      <InputContainer>
        <NormalText
          className="text-black mb-1 ml-1"
          style={[styles.callText, styles.poppinsRegular]}>
          Senha:
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
                  keyboardType="default"
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
      <Row className="flex-row justify-end mr-2">
        <Pressable onPress={navigateToForgotPassword}>
          <NormalText
            className="text-amber-600 mb-2 mt-2 ml-1 underline"
            style={[styles.normaltext, styles.poppinsSemiBold]}>
            Esqueceu a senha?
          </NormalText>
        </Pressable>
      </Row>

      <Button
        className="bg-amber-500 rounded-xl h-14 items-center justify-center mt-8 bottom-0"
        onPress={handleLogin}>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <NormalText
            className="text-white"
            style={[styles.callText, styles.poppinsBold]}>
            LOGIN
          </NormalText>
        )}
      </Button>
      <Row className="flex-row justify-center mt-8 px-1">
        <Pressable onPress={navigateToRegister}>
          <NormalText
            className="text-black mb-2 mt-2 ml-1 mr-1"
            style={[styles.normaltext, styles.poppinsSemiBold]}>
            Ainda não tem uma conta?{' '}
            <NormalText
              className="text-amber-600 mb-2 mt-2 underline"
              style={[styles.normaltext, styles.poppinsSemiBold]}>
              Cadastre-se
            </NormalText>
          </NormalText>
        </Pressable>
      </Row>
    </Container>
  );
};
