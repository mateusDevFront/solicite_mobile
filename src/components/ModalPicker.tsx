import React from "react";
import styled from "styled-components/native";
import { CategoryProps } from "../screens/Home/Home";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ModalProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

export const Container = styled.View`
  /*     align-items: center;
  flex-direction: row; */
`;
export const Content = styled.View`
  width: 80%;
  height: 250px;
  background-color: #000000;
  border-width: 1px;
  border-color: #e5b817;
  border-radius: 4px;
`;
export const HeaderCategory = styled.View`
  height: 50px;
  width: 100%;
  background-color: #e5b817;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text``;
export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ButtonOption = styled.TouchableOpacity`
  border-top-width: 1px;
  border-color: #e5b817;
  flex-direction: row;
  align-items: center;
`;
export const TextOption = styled.Text`
  margin: 15px;
  font-size: 17px;
  color: #fff;
`;
export const Scroll = styled.ScrollView``;

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export function ModalPicker({
  handleCloseModal,
  options,
  selectedItem,
}: ModalProps) {
  async function handleItem(item: CategoryProps) {
    /* console.log(item); */
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <ButtonOption key={index} onPress={() => handleItem(item)}>
      <AntDesign  style={{marginLeft: 15}} name="star" size={15} color="#e5b817" />
      <TextOption style={{marginLeft: 15}} >{item?.name}</TextOption>
    </ButtonOption>
  ));

  return (
    <Button onPress={handleCloseModal}>
      <Content>
        <HeaderCategory>
          <Text style={{ fontSize: 17 }}>Escolha uma categoria</Text>
        </HeaderCategory>
        <Scroll showsVerticalScrollIndicator={false}>
        {option}</Scroll>
      </Content>
    </Button>
  );
}
