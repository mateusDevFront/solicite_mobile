import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ModalDetail from "./components/ModalDetail";
import {
  Container,
  ContainerInput,
  TextInput,
  ContainerBody,
  ButtonIconSearch,
  ContainerList,
  Text,
  List,
} from "./styles";
import { Modal } from "react-native";
import HeaderReturn from "../../components/HeaderReturn";
import { api } from "../../services/api";

type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  name: string;
  first_name: string;
};

interface PedidosProps {
  orders: OrderProps[];
}
export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
  };
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  };
};

export default function Search({ orders }: PedidosProps) {
  const [search, setSearch] = useState("");

  //Contem todos os dados da lista
  const [clientes, setClientes] = useState(orders || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>();

  const [modalVisible, setModalVisible] = useState(false);

  /* console.log('modalItem', modalItem) */

  useEffect(() => {
    async function buscandoPedidos() {
      const response = await api.get("/orders");
      setClientes(response.data);
    }
    buscandoPedidos();
  }, [clientes]);


  async function handleGetClientDetail(id: string) {
    const response = await api.get("/order/detail", {
      params: {
        order_id: id,
      },
    });
    setModalItem(response.data);
    setModalVisible(true);
  }

  function handleFinishItem(id: string){
    const response = api.put('order/finish', {
      order_id: id
    })
    setModalVisible(false)
  }

  function closedModalDetail() {
    setModalVisible(false);
  }

  return (
    <Container>
      <HeaderReturn title="Pedidos Abertos" />

      <ContainerBody>
        {clientes.map((item, index) => (
          <ContainerList key={index}>
            <List>
              <Text style={{ color: "#fff" }}>
                {item.name} - {"Mesa " + item.table}
              </Text>
              <ButtonIconSearch onPress={() => handleGetClientDetail(item.id)}>
                <AntDesign name="setting" size={22} color="#fff" />
              </ButtonIconSearch>
            </List>
          </ContainerList>
        ))}
      </ContainerBody>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <ModalDetail
          order={modalItem}
          isOpen={modalVisible}
          onRequestClose={closedModalDetail}
          handleFinishOrder={handleFinishItem}
        />
      </Modal>
    </Container>
  );
}
