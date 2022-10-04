import React from 'react';
import styled from 'styled-components/native';

export const ContainerProgress = styled.View`
    flex:1;
    height: 100%;
    width: 90%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`
export const ProgressIcon = styled.View`
    height: 10px;
    width: 10px;
    border-radius: 30px;
    background-color: #E5B817;
    margin: 5px;
    margin-bottom: 30px;
    margin-top: 30px;
`

export default function Progress(){
    return(
        <ContainerProgress>
            <ProgressIcon></ProgressIcon>
            <ProgressIcon></ProgressIcon>
            <ProgressIcon></ProgressIcon>
        </ContainerProgress>
    )
}