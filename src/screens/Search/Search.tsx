import React from "react";
import { Container, ContainerInput, TextInput } from "./styles";
import { useNavigation } from "@react-navigation/native";

import HeaderReturn from "../../components/HeaderReturn";
import ListSearch from "./Components/ListSearch";

export default function Search() {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderReturn title="Pedidos Abertos" />
      <ContainerInput>
        <TextInput
          placeholder="Digite aqui..."
          placeholderTextColor="#474747"
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </ContainerInput>
        <ListSearch/>
    </Container>
  );
}
