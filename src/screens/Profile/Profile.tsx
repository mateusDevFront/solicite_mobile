import React, { useState, useContext } from "react";
import {
  Container,
  ContainerInput,
  PhotoProfile,
  Input,
  TextInput,
  Title,
  DescriptionTitle,
  ButtonChange,
  TextChange,
  ButtonChangeLogout,
} from "./styles";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { AuthContext } from "../../context/AuthContext";

export default function Search() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <ContainerInput>
            {/* <PhotoProfile></PhotoProfile> */}
            <Title>Olá, {user.company}!</Title>
            <ButtonChangeLogout onPress={signOut}>
              <TextChange style={{ color: "#E13030" }}>Deslogar</TextChange>
            </ButtonChangeLogout>
          </ContainerInput>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}