import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const TabArea = styled.View`
  height: 60px;
  background-color: #090808;
  flex-direction: row;
  border-top: 1px solid #ccc;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #e5b817;
  border-radius: 35px;
  border: 5px solid #090808;
  margin-top: -20px;
`;
export default function CusttomTabs({ state, navigation }) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Dashboard")}>
        <Feather
          name="home"
          size={24}
          color="#404040"
        />
      </TabItem>
      <TabItem onPress={() => goTo("Search")}>
        <Feather
          name="search"
          size={24}
          color="#404040"
        />
      </TabItem>
      <TabItem onPress={() => alert("Em breve...")}>
        <Ionicons name="chatbox-outline" size={24} color="#404040" />
      </TabItem>
      <TabItem onPress={() => alert("Em breve...")}>
        <MaterialIcons name="account-circle" size={24} color="#404040" />
      </TabItem>
    </TabArea>
  );
}
