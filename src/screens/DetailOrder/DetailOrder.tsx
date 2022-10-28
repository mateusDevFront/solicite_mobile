import React, { useState, useEffect } from "react";
import HeaderReturn from "../../components/HeaderReturn";
import {
  Container,
  ContainerDetailOder,
  Title,
  Description,
  DescriptionOrder,
} from "./styles";
import { Modal, View } from "react-native";

import ModalPicker from "./Component/Modal";
import ButtonValidation from "../../components/ButtonValidation";

export default function Search({ route }) {
  const [modal, setModal] = useState(false);
  const [itemsOrder, setItemsOrder] = useState()

  //Buscando detalhes do pedido de um usuário especifico
  return (
    <Container>
      <HeaderReturn title="Detalhes" />

      <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
        <ContainerDetailOder>
          <Title>Cliente</Title>
          <Description>{route.params.name}</Description>
          <Title>Mesa</Title>
          <Description>{route.params.table}</Description>
          <Title>Pedido</Title>
          <DescriptionOrder
            style={{ color: route.params.status ? "#19DE68" : "#E13030" }}>
            Aberto
          </DescriptionOrder>
          <Title>Descrição</Title>
          <Description>
            1 - Pizza Mista
            {"\n"}
            2 - Coca cola 2L
            {"\n"}
            1 - Porção de bolinha de peixe
            </Description>
        </ContainerDetailOder>
        <ButtonValidation
          title="Adicionar"
          onPress={() => setModal(true)}
        />
      </View>

      <Modal transparent={true} visible={modal} animationType="slide">
        <ModalPicker onPress={() => setModal(false)} />
      </Modal>
    </Container>
  );
}
