import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const TabArea = styled.View`
  height: 55px;
  background-color: #090808;
  flex-direction: row;
  border-top-width: 2px;
  border-color: #e5b817;
  border-style: solid;
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
  margin-top: -30px;
`;
export default function CusttomTabs({ navigation }) {

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      {/*  <TabItem onPress={() => alert('em breve')}>
        <Feather name="search" size={24} color="#404040" />
      </TabItem> */}
      <TabItem onPress={() => goTo("Search")}>
        <Feather
          name="search"
          size={24}
          color="#404040"
        />
      </TabItem>
      <TabItemCenter
      activeOpacity={9}
      onPress={() => goTo("Dashboard")}>
        <MaterialCommunityIcons
          name="view-dashboard-edit"
          size={30}
          color="#000000"
        />
      </TabItemCenter>
      {/* <TabItem onPress={() => alert("Em breve...")}>
        <Ionicons name="chatbox-outline" size={24} color="#404040" />
      </TabItem> */}
      <TabItem onPress={() => navigation.navigate("Profile")}>
        <MaterialIcons
          name="account-circle"
          size={24}
          color="#404040"
        />
      </TabItem>
    </TabArea>
  );
}
