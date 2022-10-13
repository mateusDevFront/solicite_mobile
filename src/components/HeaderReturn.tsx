import React from "react";
import {useNavigation} from '@react-navigation/native'
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  width: 90%;
`;
export const ButtonIcon = styled.TouchableOpacity``
export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 75px;
`;

export default function Form({ title }) {

  const navigation = useNavigation();

  return (
    <Header>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </ButtonIcon>
      <Text>{title}</Text>
    </Header>
  );
}
