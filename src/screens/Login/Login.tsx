import React, { useState, useContext } from "react";
import {
  Image,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,

} from "react-native";
import { ImageBackground, Container, ContainerLogo, ContainerInput,Input } from "./styles";
import ButtonValidation from "../../components/ButtonValidation";
import Form from "../../components/Form";
import Logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import imagebackground from "../../assets/login.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import {ActivityIndicator} from 'react-native'
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    await signIn({ email, password });
  }

  const navigation = useNavigation();
  return (
    <ImageBackground source={imagebackground}>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ContainerLogo>
              <Image source={Logo} />
            </ContainerLogo>
            <ContainerInput>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#474747"
              />
              <Input
                placeholder="Email"
                placeholderTextColor="#474747"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
            </ContainerInput>
            <ContainerInput>
              <Octicons
                style={{ marginLeft: 3 }}
                name="lock"
                size={22}
                color="#474747"
              />
              <Input
                style={{ marginLeft: 14 }}
                placeholder="Senha"
                placeholderTextColor="#474747"
                secureTextEntry
                value={password}
                onChangeText={(e) => setPassword(e)}
              />
            </ContainerInput>
            
            <ButtonValidation onPress={handleLogin} title="Entrar" />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
    </ImageBackground>
  );
}
