import React from 'react'
import styled from 'styled-components/native';

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
    return(
        <ContainerButton onPress={onPress}>
            <TextButton>{title}</TextButton>
        </ContainerButton>
    )
}