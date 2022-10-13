import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { CategoryProps } from "../../Home/Home";

interface ModalProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

export const Container = styled.View`
  flex: 1;
  background-color: "rgba(0, 0, 0, 0.6)";
  align-items: center;
`;
export const ModalContainer = styled.View`
  flex: 1;
  width: 95%;
  background-color: #212121;
  margin-top: 190px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
`;
export const Input = styled.View`
  height: 45px;
  width: 90%;
  border-radius: 12px;
  background-color: #151515;
  margin-top: 20px;
  justify-content: center;
  padding-left: 10px;
`;
export const TextInput = styled.TextInput``;
export const ContainerButtonOrder = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 87%;
  margin-top: 20px;
`;
export const ButtonNext = styled.TouchableOpacity`
  height: 50px;
  width: 45%;
  background-color: #19DE68;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const ButtonClose = styled.TouchableOpacity`
  height: 50px;
  width: 45%;
  background-color: #e13030;
  border-radius: 5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ onPress }) => {
  return (
    <Container>
      <ModalContainer>
        <Title>Alterar detalhes do pedido</Title>
        <Input>
          <TextInput
            placeholder="seu pedido vai ser aqui..."
            placeholderTextColor="#474747"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Input>
        <Input>
          <TextInput
            placeholder="seu pedido vai ser aqui..."
            placeholderTextColor="#474747"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Input>
        <Input>
          <TextInput
            placeholder="seu pedido vai ser aqui..."
            placeholderTextColor="#474747"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Input>

        <ContainerButtonOrder>
          <ButtonNext>
            <Text>{"Alterar"}</Text>
          </ButtonNext>
          <ButtonClose
            onPress={onPress}
            style={{
              backgroundColor: "#212121",
              borderWidth: 2,
              borderColor: "#E13030",
            }}
          >
            <Text style={{ color: "#E13030", fontSize: 15 }}>{"Cancelar"}</Text>
          </ButtonClose>
        </ContainerButtonOrder>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
