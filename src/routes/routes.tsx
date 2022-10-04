import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes() {
  const {isAuthenticated} = useContext(AuthContext);
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
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
export default Routes;
