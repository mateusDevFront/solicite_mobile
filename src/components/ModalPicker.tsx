import React from "react";
import styled from "styled-components/native";
import { CategoryProps } from "../screens/Home/Home";
import { Dimensions } from "react-native";

interface ModalProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: () => void;
}

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
  align-items: flex-start;
  border-top-width: 1px;
  border-color: #e5b817;
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
    selectedItem(item)
  }

  const option = options.map((item, index) => (
    <ButtonOption key={index} onPress={() => handleItem(item)}>
      <TextOption>{item?.name}</TextOption>
    </ButtonOption>
  ));

  return (
    <Button onPress={handleCloseModal}>
      <Content>
        <HeaderCategory>
          <Text style={{ fontSize: 17 }}>Escolha uma categoria</Text>
        </HeaderCategory>
        <Scroll showsVerticalScrollIndicator={false}>{option}</Scroll>
      </Content>
    </Button>
  );
}
