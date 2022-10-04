import React, { useState, createContext, ReactNode } from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
}
type UserProps = {
    id: string;
    company: string;
    email: string;
    token: string
}
type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<UserProps>({
        id: '',
        company: '',
        email: '',
        token: ''
    })

    const isAuthenticated = !!user.company

    return (
        <AuthContext.Provider value={{user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}