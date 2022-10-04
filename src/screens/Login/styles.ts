import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: center;
  align-items: center;
`;
export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'stretch'
})`
  flex: 1;
`
export const ContainerLogo = styled.View`
    margin-bottom: 90px;
    justify-content: center;
    align-items: center;
`;
export const Logo = styled.Image`
    height: 10%;
    width: 10%;
`;
export const ContainerInput = styled.View`
  height: 40px;
  margin-bottom: 15px;
  width: 100%;
  background-color: #1f1e1e;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Input = styled.TextInput`
  color: #fff;
  margin-left: 10px;
  width: 90%;
`;