import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View``;
export const Text = styled.Text`
  color: #fff;
`;
export const AlignBloco = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const BoxRed = styled.View`
  height: 50px;
  width: 5px;
  background-color: #e13030;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const BoxGray = styled.View`
  height: 50px;
  width: 100%;
  background-color: #1f1e1e;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;
export const ButtonClose = styled.TouchableOpacity``;

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  };
  deleteItem: (item_id: string) => void;
}

export function ListProductsItems({ data, deleteItem }: ItemProps) {
  function handleCloseItem() {
    deleteItem(data.id);
  }

  return (
    <Container>
      <AlignBloco>
        <BoxRed></BoxRed>
        <BoxGray>
          <Text>{`${data.amount} - ${data.name}`}</Text>
          <ButtonClose onPress={handleCloseItem}>
            <Ionicons name="md-close-circle-sharp" size={24} color="#E13030" />
          </ButtonClose>
        </BoxGray>
      </AlignBloco>
    </Container>
  );
}
