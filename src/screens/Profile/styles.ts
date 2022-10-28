import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #151515;
`
export const PhotoProfile = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-bottom: 20px;
    background-color: #ccc;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 25px;
    margin-bottom: 20px;
`
export const DescriptionTitle = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-bottom: 20px;
`
export const Photo = styled.TouchableOpacity`
    height: 150px;
    width: 150px;
    border-radius: 100px;
    background-color: #fff;
`
export const ContainerInput = styled.View`
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`
export const Input = styled.View`
    height: 40px;
    width: 80%;
    border: 1px solid #353535;
    border-radius: 12px;
    justify-content: center;
    margin-bottom: 20px;
`
export const TextInput = styled.TextInput`
    padding-left: 10px;
`
export const ButtonChange = styled.TouchableOpacity`
    border: 2px solid #E5B817;
    width: 80%;
    height: 50px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
export const ButtonChangeLogout = styled.TouchableOpacity`
border: 2px solid #E13030;
    width: 80%;
    height: 50px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
export const TextChange = styled.Text`
    font-size: 18px;
    color: #E5B817;
`