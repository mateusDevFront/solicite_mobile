import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Dashboard from "../screens/Dashboard/Dashboard";
import FinishOrder from "../screens/Finish/FinishOrder";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
import Chat from "../screens/Chat/Chat";
import DetailOrder from "../screens/DetailOrder/DetailOrder";

export type StackPramsList = {
  Dashboard: {
    name: string;
    number: string;
    order_id: string;
  };
  Search: undefined;
  Profile: undefined;
  Chat: undefined;
  DetailOrder: undefined;
  Home: {
    name: string;
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number | string;
    order_id: string;
  };
};

const Stack = createNativeStackNavigator<StackPramsList>();

export default function MainTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailOrder"
        component={DetailOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
}