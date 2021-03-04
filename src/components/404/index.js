import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {
  Wrapper,
  Container,
  TextContent,
  DetailButton,
  BtnText,
} from "./style404";
const Section404 = () => {
    return (
      <Wrapper>
        <Container>
          <TextContent>This page does not exist.</TextContent>

          <DetailButton>
          <BtnText>CONTACT SUPPORT</BtnText>
          <AiOutlineArrowRight/>
          </DetailButton>
        </Container>
      </Wrapper>
    );
}

export default Section404
