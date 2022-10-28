import React, { useState } from "react";
import ButtonValidation from "../../components/ButtonValidation";
import {
  Container,
  ImageBackground,
  Text,
  Description,
  ContainerInput,
  Input,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import dashboardBg from "../../assets/dashboard.jpg";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackPramsList } from "../../routes/mainTab"
import { api } from "../../services/api";

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  async function openTable() {
    if (name === "") {
      return;
    }

    const response = await api.post("/order", {
      name: String(name),
      table: Number(number),
    });
    /* console.log(response.data) */
    //criar requisição para abrir a mesa e levar para a tela home
    navigation.navigate("Home", {
      name: name,
      number: number,
      order_id: response.data.id,
    });
    setName("");
    setNumber("");
  }

  return (
    <ImageBackground source={dashboardBg}>
      <Container>
        <Text>Olá, Seja Bem{"\n"}Vindo!</Text>
        <Description>Vamos lá abrir{"\n"} uma nova mesa?</Description>

        <ContainerInput>
          <Feather name="users" size={23} color="#474747" />
          <Input
            placeholder="Nome do Cliente"
            placeholderTextColor="#474747"
            value={name}
            onChangeText={setName}
          />
        </ContainerInput>
        <ContainerInput>
          <MaterialCommunityIcons name="black-mesa" size={24} color="#474747" />
          <Input
            placeholder="Número da mesa"
            placeholderTextColor="#474747"
            value={number}
            keyboardType="numeric"
            onChangeText={setNumber}
            maxLength={2} //setting limit of input
          />
        </ContainerInput>

        <ButtonValidation
          style={[{ opacity: number.length === 0 ? 0.4 : 1 }]}
          disabled={number.length === 0}
          onPress={openTable}
          title="Abrir"
        />

        {/* <Progress /> */}
      </Container>
    </ImageBackground>
  );
}
