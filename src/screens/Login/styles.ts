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