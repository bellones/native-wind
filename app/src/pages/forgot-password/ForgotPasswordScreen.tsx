
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BackButton } from '../../components/BackButton';
import { Background, NormalText, SafeContainer, Title, styles } from '../../utils/constants';
import ForgotPasswordForm from './components/ForgotPasswordForm';


export const ForgotPasswordScreen: React.FC = () => {
  return (
    <Background className="flex-1 bg-white h-full" style={styles.paddingGlobal}>
      <SafeContainer>
        <BackButton />
        <KeyboardAwareScrollView scrollEnabled horizontal={false} showsVerticalScrollIndicator={false}>
          <Title
            className="text-amber-500 mt-2"
            style={[styles.poppinsRegular, styles.backText]}>
            Recupere sua Senha
          </Title>
          <NormalText className="text-neutral-600 mb-4 text-justify mt-4">
            Se você esqueceu sua senha, não se preocupe! Nós te ajudamos a recuperá-la.
            preencha o email abaixo e se sua conta existir você receberá um email com as instruções para recuperar sua senha.
          </NormalText>
          <ForgotPasswordForm />
        </KeyboardAwareScrollView>
      </SafeContainer>
    </Background>
  );
};
