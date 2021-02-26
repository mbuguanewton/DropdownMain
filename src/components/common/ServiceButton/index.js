import React from "react";
import { Wrapper, Container, Frame, ContentText } from "./stylebutton";
import { Button } from "../../common";
const ServiceButton = ({Head, BtnText}) => {
  console.log('btn text', BtnText)
  return (
    <Wrapper>
      <Container>
        <Frame />
        <ContentText>{Head}</ContentText>
        <Button Btext={BtnText} />
      </Container>
    </Wrapper>
  );
};

export { ServiceButton };
