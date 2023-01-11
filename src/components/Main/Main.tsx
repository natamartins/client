import React from "react";
import * as S from "./styles";
const Main = ({
  title = "React Avançado",
  description = " typeScript, React JS, NextJs e Styled-Component",
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="./img/logo.svg" alt="Imagem de um átomo e react avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustrations
        src="./img/hero-illustration.svg"
        alt="desenvolvdor de frente para uma tela com códigos"
      />
    </S.Wrapper>
  );
};

export default Main;
