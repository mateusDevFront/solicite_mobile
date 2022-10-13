import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
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
  ListProducts,
} from "./styles";
import { Modal } from "react-native";
import { ModalPicker } from "../../components/ModalPicker";
import Progress from "../../components/Progress";
import { ListProductsItems } from "../../components/ListProductsItems";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackPramsList} from '../../routes/app.routes'

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
type ProductProps = {
  id: string;
  name: string;
};
type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
}; 

type OrderProp = RouteProp<RouteParams, "Home">;

export default function Home() {
  const route = useRoute<OrderProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelect, setCategorySelect] = useState<
    CategoryProps | undefined
  >();

  const [amount, setAmount] = useState("1");
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState<ItemProps[]>([]);

  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelect, setProductSelect] = useState<
    ProductProps | undefined
  >();
  const [modalProduct, setModalProduct] = useState(false);

  useEffect(() => {
    async function loadingInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelect(response.data[0]); //Pegando a primeira posição
    }
    loadingInfo();
  }, []);

  //Chamar toda vez que selecionar uma categoria
  useEffect(() => {
    async function loadingProduct() {
      const response = await api.get("/category/product", {
        params: {
          category_id: categorySelect?.id,
        },
      });
      /* console.log(response.data) */
      setProducts(response.data);
      setProductSelect(response.data[0]);
    }
    loadingProduct();
  }, [categorySelect]);

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

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelect(item);
  }
  function handleChangeProduct(item: ProductProps) {
    setProductSelect(item);
  }
  //adicionar produto na mesa
  async function handleAddItem() {
    /* console.log('clicou') */
    const response = await api.post("/order/add", {
      order_id: route.params?.order_id,
      product_id: productSelect?.id,
      amount: Number(amount),
    });
    let data = {
      id: response.data.id,
      product_id: productSelect?.id as string,
      name: productSelect?.name as string,
      amount: amount,
    };
    setItems((oldArray) => [...oldArray, data]);
  }

  function deleteItem(item_id) {
    /* console.log('deletado') */
    Alert.alert("OPA!", "Tem certeza que deseja excluir essa opção do seu pedido?", [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: () => handleDeleteItem(item_id),
      },
    ]);
  }

  async function handleDeleteItem(item_id: string) {
    await api.delete("/order/remove", {
      params: {
        item_id: item_id,
      },
    });
    //Remover da api e remover o item da lista//
    let removeItem = items.filter((item) => {
      return item.id !== item_id;
    });
    setItems(removeItem);
  }

  function handleScreenFinish(){
    /* alert('ok') */
    navigation.navigate('FinishOrder', {
      number: route.params.number,
      order_id: route.params.order_id
    })
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
              <TitleCategory>{productSelect?.name}</TitleCategory>
              {products.length !== 0 && (
                <ButtonPopUp onPress={() => setModalProduct(true)}>
                  <AntDesign name="down" size={24} color="#E5B817" />
                </ButtonPopUp>
              )}
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
        <BoxButton onPress={handleAddItem}>
          <Text style={{ color: "#E5B817", fontSize: 30, fontWeight: "bold" }}>
            +
          </Text>
        </BoxButton>
      </ContainerQuant>

      {/* <ButtonValidation onPress={() => {}} title="Próximo" /> */}

      <ContainerButtonOrder>
        <ButtonNext
          onPress={handleScreenFinish}
          style={[{ opacity: items.length === 0 ? 0.3 : 1 }]}
          disabled={items.length == 0}
        >
          <Text>{"Próximo"}</Text>
        </ButtonNext>
        {items.length === 0 && (
          <ButtonClose
          style={{ backgroundColor: '#151515',borderWidth: 2, borderColor: '#E13030'}}
          onPress={closeOrder}>
            <Text style={{color: '#E13030', fontSize: 15}}>{"Excluir"}</Text>
          </ButtonClose>
        )}
      </ContainerButtonOrder>

      <ListProducts
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 25 }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListProductsItems deleteItem={deleteItem} data={item} />
        )}
      />

      {/* <Progress /> */}

      <Modal transparent={true} visible={modal} animationType="slide">
        <ModalPicker
          handleCloseModal={() => setModal(false)}
          options={category}
          selectedItem={handleChangeCategory}
        />
      </Modal>
      <Modal transparent={true} visible={modalProduct} animationType="slide">
        <ModalPicker
          handleCloseModal={() => setModalProduct(false)}
          options={products}
          selectedItem={handleChangeProduct}
        />
      </Modal>
    </Container>
  );
}
