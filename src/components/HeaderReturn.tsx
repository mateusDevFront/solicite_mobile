import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Header = styled.View`
  margin-top: 65px;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;
export const ButtonIcon = styled.TouchableOpacity``;
export const ContainerTitle = styled.View`
  height: 50px;
  align-items: flex-end;
`
export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
`;

export default function Form({ title }) {
  const navigation = useNavigation();

  return (
    <Header>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={26} color="#fff" />
      </ButtonIcon>
      <ContainerTitle>
        <Text>{title}</Text>
      </ContainerTitle>
    </Header>
  );
}
