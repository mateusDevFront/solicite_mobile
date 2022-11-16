import React, { useState, useEffect } from "react";
import { Entypo, FontAwesome  } from '@expo/vector-icons';
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
  BorderList,
  ContainerListBorder
} from "./styles";
import { Modal } from "react-native";
import HeaderReturn from "../../components/HeaderReturn";
import { api } from "../../services/api";

type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  name: string;
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
    name: string;
  };
};

export default function Search({ orders }: PedidosProps) {
  //Contem todos os dados da lista
  const [clientes, setClientes] = useState(orders || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [search, setSearch ] = useState('')

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

  async function handleFinishItem(id: string) {
    const response = await api.put("/order/finish", {
      order_id: id,
    });
    setModalVisible(false);
  }

  function closedModalDetail() {
    setModalVisible(false);
  }

  return (
    <Container>
      <HeaderReturn title="Pedidos Abertos" />

      <ContainerBody>
        <ContainerInput>
          <TextInput
            placeholder="Buscar pedido..."
            placeholderTextColor="#474747"
            autoCapitalize="none"
            keyboardType="email-address"
            value={search}
            onChangeText={setSearch}
          />
          <FontAwesome  name="search" size={20} color="#474747" />
        </ContainerInput>
        {clientes.length === 0 && (
          <Text style={{color: '#fff',opacity: 0.3, fontSize: 19}}>Não há pedidos abertos...</Text>
        )}
        {clientes.filter((val) => {
          if(search === ''){
            return val
          }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }}).map((item, index) => (
          <ContainerListBorder key={index}>
            <BorderList></BorderList>
            <ContainerList >
              <List>
                <Text style={{ color: "#fff" }}>
                  {item.name} - {"Mesa " + item.table}
                </Text>
                <ButtonIconSearch
                  onPress={() => handleGetClientDetail(item.id)}>
                  <Entypo name="menu" size={25} color="#fff" />
                </ButtonIconSearch>
              </List>
            </ContainerList>
          </ContainerListBorder>
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
