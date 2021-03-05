import React from "react";
import AleroLogo from "../../../assets/Icons/Logo.svg";
import {
  HeroWrapper,
  HeroContainer,
  LogoSection,
  Logo,
  CompanyName,
  ContentSection,
  Content,
  ContentSubText,
  ButtonWrapper,
  Button,
  BgWrap,
  BgImage
} from "./HeroStyles";
const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
      <BgWrap>
      <BgImage/>
      </BgWrap>
        <LogoSection>
          <Logo src={AleroLogo} />
          <CompanyName>ALERO</CompanyName>
        </LogoSection>
        <ContentSection>
          <Content>Digital Branding & Software development experts</Content>
          <ContentSubText>Get your free quotation.</ContentSubText>
        </ContentSection>
        <ButtonWrapper>
          <Button to='/contact'>Get An Estimate</Button>
        </ButtonWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export {HeroSection};
