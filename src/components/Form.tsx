import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export const Container = styled.View``;
export const ContainerInput = styled.View`
  height: 40px;
  margin-bottom: 15px;
  width: 100%;
  background-color: #1f1e1e;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Input = styled.TextInput`
  color: #fff;
  margin-left: 10px;
  width: 90%;
`;

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFillled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    /* setIsFilled(!!value) */
  }
  return (
    <Container>
      <ContainerInput>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={isFocused ? "#E5B817" : "#474747"}
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
    </Container>
  );
}
