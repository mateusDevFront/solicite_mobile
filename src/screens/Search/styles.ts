import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #151515;
  padding-left: 10px;
  padding-right: 10px;
`;
export const ContainerBody = styled.View`
  align-items: center;
  flex: 1;
`;
export const ContainerInput = styled.View`
  height: 40px;
  width: 90%;
  background-color: #212121;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const TextInput = styled.TextInput`
  color: #fff;
`;
export const ButtonIconSearch = styled.TouchableOpacity``;
export const ListOrders = styled.FlatList``;
export const ContainerDefault = styled.Text`
  flex: 1;
  margin-left: 70px;
  margin-top: 20%;
`;
export const TextDefault = styled.Text`
  color: #e13030;
  font-size: 20px;
`;
export const Text = styled.Text`
  color: "#fff";
  font-size: 14px;
`;
export const ContainerList = styled.View`
  background-color: #212121;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
`;
export const List = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const BorderList = styled.View`
  background-color: #19DE68;
  height: 42px;
  width: 4px;
  margin-bottom: 10px;
`
export const ContainerListBorder = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`