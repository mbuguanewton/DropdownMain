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
} from "./HeroStyles";
const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <LogoSection>
          <Logo src={AleroLogo} />
          <CompanyName>ALERO</CompanyName>
        </LogoSection>
        <ContentSection>
          <Content>Digital Branding & Software development experts</Content>
          <ContentSubText>Get your free quotation.</ContentSubText>
        </ContentSection>
        <ButtonWrapper>
          <Button>Get A Estimate</Button>
        </ButtonWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
