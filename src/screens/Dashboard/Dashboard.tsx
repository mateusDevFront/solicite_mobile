import React from "react";
import ButtonValidation from "../../components/ButtonValidation";
import {
  Container,
  ImageBackground,
  Text,
  Description,
  ContainerInput,
  Input,
} from "./styles";
import Progress from "../../components/Progress";
import { useNavigation } from "@react-navigation/native";
import dashboardBg from "../../assets/dashboard.jpg";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={dashboardBg}>
      <Container>
        <Text>Olá, Seja Bem{"\n"}Vindo!</Text>
        <Description>Vamos lá abrir{"\n"} uma nova mesa?</Description>

        <ContainerInput>
          <Feather name="users" size={23} color="#474747" />
          <Input placeholder="Nome do Cliente" placeholderTextColor="#474747" />
        </ContainerInput>
        <ContainerInput>
          <MaterialCommunityIcons name="black-mesa" size={24} color="#474747" />
          <Input placeholder="Número da mesa" placeholderTextColor="#474747" />
        </ContainerInput>

        <ButtonValidation
          onPress={() => navigation.navigate("Home")}
          title="Abrir"
        />

        <Progress />
      </Container>
    </ImageBackground>
  );
}
