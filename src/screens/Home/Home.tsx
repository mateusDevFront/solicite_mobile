import React from "react";
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
  BoxButton
} from "./styles";
import Progress from "../../components/Progress";
import { AntDesign } from "@expo/vector-icons";
import ButtonValidation from '../../components/ButtonValidation'

export default function Home() {
  return (
    <Container>
      <Title>Faça seu pedido!</Title>

      <ContainerCliente>
        <TitleCliente>Mateus - Mesa 22</TitleCliente>
      </ContainerCliente>

      <ContainerCategoryAll>
        <ContainerCategory>
          <BoxYellow></BoxYellow>
          <BoxGray>
            <AlignBoxGray>
              <TitleCategory>Pizza</TitleCategory>
              <ButtonPopUp>
                <AntDesign name="down" size={24} color="#E5B817" />
              </ButtonPopUp>
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
          />
        </BoxGrayQuan>
        <BoxButton>
          <Text style={{color: '#E5B817', fontSize: 30, fontWeight: 'bold' }}>+</Text>
        </BoxButton>
      </ContainerQuant>

      <ButtonValidation
        onPress={() => {}}
        title="Próximo"
      />

      <Progress/>
    </Container>
  );
}
