import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
