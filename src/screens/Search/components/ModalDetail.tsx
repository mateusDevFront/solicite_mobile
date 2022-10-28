import React from "react";
import styled from "styled-components/native";
import {OrderItemProps} from '../Search'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const ContainerItems = styled.View`
  width: 85%;
  justify-content: center;
  background-color: #212121;
  border-radius: 10px;
  padding: 25px;
`;
export const AlignItems = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;
export const Title = styled.Text`
  color: #e5b817;
  font-size: 14px;
  padding-left: 5px;
`;
export const Description = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const DescriptionItem = styled.Text`
  margin-top: 5px;
`;
export const ButtonClosedModal = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  border: 1px;
  border-color: #e13030;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 15px;
`;
export const ButtonEditDetail = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  border: 1px;
  border-color: #19de68;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 20px;
`;
export const TextButtonClosedModal = styled.Text`
  color: #e13030;
  font-size: 16px;
`;
export const TextButtonEditDetail = styled.Text`
  color: #19de68;
  font-size: 16px;
`;
export const AlignRowButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

interface ModalOrderProps {
  isOpen: boolean;
  order: OrderItemProps[];
  closedModal: () => void;
}

export default function ModalDetail({
  isOpen,
  order,
  closedModal,
}: ModalOrderProps) {
  return (
    <Container>
      <ContainerItems isOpen={isOpen}>
        <AlignItems>
          <Title>{"Cliente:"}</Title>
          <Description>{order[0].order.name}</Description>
        </AlignItems>
        <AlignItems>
          <Title>{"Mesa:"}</Title>
          <Description>{order[0].order.table}</Description>
        </AlignItems>
        <AlignItems>
          <Title>{"Status:"}</Title>
          <Description
            style={{ color: order[0].order.table ? "#19DE68" : "#E13030" }}>
            {order[0].order.table ? "Aberto" : "Fechado"}
          </Description>
        </AlignItems>
        <Title>- Detalhes do pedido -</Title>
        {order.map((item, index) => (
          <Description key={index} style={{ marginTop: 10 }}>
            {item.amount} - {item.product.name} - {" "}
            {"( R$ " + item.product.price + " )"}
          </Description>
        ))}
        <AlignRowButton>
          <ButtonClosedModal onPress={closedModal}>
            <TextButtonClosedModal>Fechar</TextButtonClosedModal>
          </ButtonClosedModal>
          <ButtonEditDetail onPress={() => alert("Em breve")}>
            <TextButtonEditDetail>Editar</TextButtonEditDetail>
          </ButtonEditDetail>
        </AlignRowButton>
      </ContainerItems>
    </Container>
  );
}