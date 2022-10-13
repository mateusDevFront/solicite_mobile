import React, {useState} from "react";
import HeaderReturn from "../../components/HeaderReturn";
import {
  Container,
  ContainerDetailOder,
  Title,
  Description,
  DescriptionOrder,
} from "./styles";
import { Modal } from "react-native";

import ModalPicker from './Component/Modal'
import ButtonValidation from "../../components/ButtonValidation";

export default function Search() {

  const [modal, setModal] = useState(false);

  const [modalProduct, setModalProduct] = useState(false);

  return (
    <Container>
      <HeaderReturn title="Detalhes" />

      <ContainerDetailOder>
        <Title>Cliente</Title>
        <Description>Mateus Nascimento</Description>
        <Title>Mesa</Title>
        <Description>09</Description>
        <Title>Pedido</Title>
        <DescriptionOrder>
          1 Pizza Calabresa {"\n"}3 Coca Cola 2L{"\n"}1 Água Mineral
        </DescriptionOrder>
      </ContainerDetailOder>

      <ButtonValidation title="Alterar Pedido"  onPress={() => setModal(true)}/>

      <Modal  transparent={true} visible={modal} animationType="slide">
        <ModalPicker onPress={() => setModal(false)}/>
      </Modal>
    </Container>
  );
}
