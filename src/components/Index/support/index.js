import React from "react";
import {
  Wrapper,
  Container,
  SupportText,
  SupportBtnWrap,
  Button,
} from "./supportStyle";
const SupportSection = () => {
  return (
    <Wrapper>
      <Container>
        <SupportText>
          We support your goal to develop an online presences, help you boost
          traffic to an existing website...a simple solution for you.
        </SupportText>
        <SupportBtnWrap>
          <Button>GET STARTED</Button>
        </SupportBtnWrap>
      </Container>
    </Wrapper>
  );
};

export default SupportSection;
