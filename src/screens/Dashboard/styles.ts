import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
`
export const ImageBackground = styled.ImageBackground.attrs({
    resizeMode: 'stretch'
  })`
    flex: 1;
  `
export const Text = styled.Text`
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin-top: 60px;
`
export const Description = styled.Text`
    color: #E5B817;
    font-size: 25px;
    text-align: center;
    margin-top: 35px;
    margin-bottom: 20px;
`
export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-bottom: 15px;
  width: 100%;
  background-color: #232222;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Input = styled.TextInput`
    color: #fff;
    margin-left: 10px;
`;
