import React, {useContext} from 'react'
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const ContainerButton = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    background-color: #E5B817;
    border-radius: 5px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`
export const TextButton = styled.Text`
    color: #151515;
    font-size: 20px;
    font-weight: bold;
`
type Props = {
    title: string;
    onPress(): void
}

export default function ButtonValidation({title, onPress}: Props){

    const {loadingAuth} = useContext(AuthContext);

    return(
        <ContainerButton onPress={onPress}>
            {loadingAuth ? (
                <ActivityIndicator size={25} color="#151515"/> 
                ): (
                <TextButton>{title}</TextButton>
            )}
        </ContainerButton>
    )
}