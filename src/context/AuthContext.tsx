import React, { useState, createContext, ReactNode } from "react";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credencial: SignInProps) => Promise<void>;
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
  
  const [loadingAuth, setLoadingAuth] = useState(false);
  const isAuthenticated = !!user.company;

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    try {
        const response = await api.post('/auth', {
            email, password
        })
        /* console.log(response.data) */
        const {id, company, token} = response.data

        const data = {
            ...response.data
        }
        //salvando no asyncstorage
        await AsyncStorage.setItem("@soliciteToken", JSON.stringify(data))

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setUser({
            id, company, email, token
        })
        setLoadingAuth(false)
    } catch (err) {
      console.log("erro ao acessar", err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
