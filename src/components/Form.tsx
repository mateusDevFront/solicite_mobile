import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";


export const Container = styled.View``;


export default function Form() {


  const [isFocused, setIsFocused] = useState(false);
  const [isFillled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    /* setIsFilled(!!value) */
  }
  return (
    <Container>
      
    </Container>
  );
}
