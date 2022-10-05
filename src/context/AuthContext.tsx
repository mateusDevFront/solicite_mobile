import React, { useState, createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credencial: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};
type UserProps = {
  id: string;
  company: string;
  email: string;
  token: string;
};
type AuthProviderProps = {
  children: ReactNode;
};
type SignInProps = {
  email: string;
  password: string;
};
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: "",
    company: "",
    email: "",
    token: "",
  });

  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const isAuthenticated = !!user.company;

  useEffect(() => {
    //Buscar informações do usuário
    async function getUser() {
      //pegar os dados salvos
      const userInfo = await AsyncStorage.getItem("@soliciteToken");

      let hasUser: UserProps = JSON.parse(userInfo || `{}`);

      //Verificar se recebeu as informações do usuário
      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          company: hasUser.company,
          email: hasUser.email,
          token: hasUser.token,
        });
      }
      setLoading(false);
    }
    getUser();
  }, []);

  //metodo de login
  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/auth", {
        email,
        password,
      });
      /* console.log(response.data) */
      const { id, company, token } = response.data;

      const data = {
        ...response.data,
      };
      //salvando no asyncstorage
      await AsyncStorage.setItem("@soliciteToken", JSON.stringify(data));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({
        id,
        company,
        email,
        token,
      });
      setLoadingAuth(false);
    } catch (err) {
      console.log("erro ao acessar", err);
      setLoadingAuth(false);
    }
  }

  //método de deslogar
  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: "",
        company: "",
        email: "",
        token: "",
      });
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        loading,
        loadingAuth,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
