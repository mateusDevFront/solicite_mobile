import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import {
  Container,
  Title,
  ContainerCliente,
  TitleCliente,
  ContainerCategoryAll,
  ContainerCategory,
  BoxYellow,
  BoxGray,
  AlignBoxGray,
  TitleCategory,
  ButtonPopUp,
  ContainerQuant,
  BoxGrayQuan,
  InputQuant,
  BoxButton,
  ContainerButtonOrder,
  ButtonNext,
  ButtonClose,
  ModalCategory,
} from "./styles";
import { Modal } from "react-native";
import { ModalPicker } from "../../components/ModalPicker";
import Progress from "../../components/Progress";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

type RouteParams = {
  Home: {
    name: string;
    number: string | number;
    order_id: string;
  };
};
export type CategoryProps = {
  id: string;
  name: string;
};

type OrderProp = RouteProp<RouteParams, "Home">;

export default function Home() {
  const route = useRoute<OrderProp>();
  const navigation = useNavigation();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelect, setCategorySelect] = useState<CategoryProps>();

  const [amount, setAmount] = useState('1');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadingInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelect(response.data[0]); //Pegando a primeira posição
    }
    loadingInfo();
  }, []);

  //excluindo uma mesa
  async function closeOrder() {
    /* alert('clicou')  */
    api.delete("/order", {
      params: {
        order_id: route.params?.order_id,
      },
    });
    navigation.goBack();
    try {
    } catch (err) {
      console.log("erro", err);
    }
  }

  return (
    <Container>
      <Title>Faça seu pedido!</Title>

      <ContainerCliente>
        <TitleCliente>
          {`${route.params.name} - Mesa ${route.params.number}`}
        </TitleCliente>
      </ContainerCliente>

      <ContainerCategoryAll>
        <ContainerCategory>
          <BoxYellow></BoxYellow>
          <BoxGray>
            <AlignBoxGray>
              <TitleCategory>{categorySelect?.name}</TitleCategory>
              {category.length !== 0 && (
                <ButtonPopUp onPress={() => setModal(true)}>
                  <AntDesign name="down" size={24} color="#E5B817" />
                </ButtonPopUp>
              )}
            </AlignBoxGray>
          </BoxGray>
        </ContainerCategory>

        <ContainerCategory>
          <BoxYellow></BoxYellow>
          <BoxGray>
            <AlignBoxGray>
              <TitleCategory>Pizza - Calabresa Acebolada</TitleCategory>
              <ButtonPopUp>
                <AntDesign name="down" size={24} color="#E5B817" />
              </ButtonPopUp>
            </AlignBoxGray>
          </BoxGray>
        </ContainerCategory>
      </ContainerCategoryAll>

      <ContainerQuant>
        <BoxYellow></BoxYellow>
        <BoxGrayQuan>
          <InputQuant
            placeholder="Quantidade"
            placeholderTextColor="#474747"
            value={amount}
            onChangeText={setAmount}
          />
        </BoxGrayQuan>
        <BoxButton>
          <Text style={{ color: "#E5B817", fontSize: 30, fontWeight: "bold" }}>
            +
          </Text>
        </BoxButton>
      </ContainerQuant>

      {/* <ButtonValidation onPress={() => {}} title="Próximo" /> */}

      <ContainerButtonOrder>
        <ButtonNext>
          <Text>{"Próximo"}</Text>
        </ButtonNext>
        <ButtonClose onPress={closeOrder}>
          <Text>{"Excluir"}</Text>
        </ButtonClose>
      </ContainerButtonOrder>

      <Progress />

      <Modal transparent={true} visible={modal} animationType="slide">
        <ModalPicker
          handleCloseModal={() => setModal(false)}
          options={category}
          selectedItem={() => {}}
        />
      </Modal>
    </Container>
  );
}
