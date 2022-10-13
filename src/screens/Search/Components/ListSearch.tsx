import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ContainerList = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`;
export const ButtonSetting = styled.TouchableOpacity``;
export const Green = styled.View`
  height: 50px;
  width: 5px;
  background-color: #19de68;
`;
export const Gray = styled.View`
  height: 50px;
  width: 100%;
  background-color: #212121;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Name = styled.Text`
  color: #fff;
`;

export default function ListSearch() {
  const navigation = useNavigation();

  return (
    <ContainerList>
      <Green></Green>
      <Gray>
        <Name>Mateus Silva - 30</Name>
        <ButtonSetting onPress={() => navigation.navigate("DetailOrder")}>
          <AntDesign name="setting" size={24} color="white" />
        </ButtonSetting>
      </Gray>
    </ContainerList>
  );
}
