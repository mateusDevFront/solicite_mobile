import React from "react";
import { Container, Text, BoxItem, Image, ButtonFinishItem } from "./styles";
import Icon from "../../assets/icon.png";
import {Alert} from 'react-native'
import {api} from '../../services/api'
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackPramsList} from '../../routes/app.routes'

type RouteDetail = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}
type FinishOrderProp = RouteProp<RouteDetail, 'FinishOrder'>

export default function FinishOrder() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
  const route = useRoute<FinishOrderProp>()

  function handleFinishOrderItem() {
    /* console.log('deletado') */
    Alert.alert("AVISO!", `Tem certeza que deseja finalizar o pedido da mesa ${route.params.number} ?`, [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Finalizar",
        onPress: () => handleFinish(),
      },
    ]);
  }
  async function handleFinish(){
    /* alert('clicou') */
    try {
      await api.put('/order/finish', {
        order_id: route.params.order_id
      })
      navigation.popToTop()
    } catch (err) {
      console.log('erro', err)
    }
  }

  return (
    <Container>
      <BoxItem>
        <Image source={Icon} width="80%" />
      </BoxItem>
      <Text style={{ marginTop: 30 }}>O seu pedido será finalizado!</Text>

      <ButtonFinishItem onPress={handleFinishOrderItem}>
        <Text style={{ color: "#151515" }}>Finalizar pedido</Text>
      </ButtonFinishItem>
      <ButtonFinishItem onPress={navigation.goBack} style={{ backgroundColor: '#151515',borderWidth: 2, borderColor: '#E13030'}}>
        <Text style={{ color: "#E13030" }}>Cancelar</Text>
      </ButtonFinishItem>
    </Container>
  );
}
