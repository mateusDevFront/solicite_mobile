import React, { useState } from "react";
import {
  Image,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  ImageBackground,
  Container,
  ContainerLogo,
} from "./styles";
import ButtonValidation from "../../components/ButtonValidation";
import Form from "../../components/Form";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import imagebackground from "../../assets/login.jpg";

export default function Login() {
  const navigation = useNavigation();



  return (
    <ImageBackground source={imagebackground}>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ContainerLogo>
              <Image source={Logo} />
            </ContainerLogo>
            <Form />
            <ButtonValidation onPress={() => {}} title="Entrar" />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
    </ImageBackground>
  );
}
