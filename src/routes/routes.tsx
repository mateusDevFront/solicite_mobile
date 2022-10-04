import React from "react";
import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes() {
  const authentication = false;
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#151515",
        }}
      >
        <ActivityIndicator size={60} color="#E5B817" />
      </View>
    );
  }
  return authentication ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;
