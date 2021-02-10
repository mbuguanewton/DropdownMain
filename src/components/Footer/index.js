import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/Icons/AleroLogo.svg";
import {
  Wrapper,
  Container,
  CompanyDetails,
  LogoSection,
  CompanyHighlight,
  ContactDetails,
  Mobile,
  EmailDetails,
  SocialMediaPlatforms,
  ServicesDetails,
  ServiceTitle,
  ServiceContent,
  FooterDetails,
  FooterDetailTitle,
  FooterContent,
  CopyRightSection,
} from "./footerStyle";
const FooterSection = ({ FServices }) => {
  return (
    <Wrapper>
      <Container>
        <CompanyDetails>
          <LogoSection src={Logo} />
          <CompanyHighlight>
            Bring your business online.
            <br /> We can do it with you!
          </CompanyHighlight>
          <ContactDetails>
            <Mobile>Mobile: +254-794 268882</Mobile>
            <EmailDetails>Email: marketing@alero.co.ke</EmailDetails>
          </ContactDetails>

          <SocialMediaPlatforms>
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
          </SocialMediaPlatforms>
        </CompanyDetails>

        <ServicesDetails>
          <ServiceTitle>Services</ServiceTitle>
          {FServices.map((data, index) => {
            return <ServiceContent key={index}>{data.title}</ServiceContent>;
          })}
        </ServicesDetails>

        <FooterDetails>
          <FooterDetailTitle>Discover</FooterDetailTitle>
          <FooterContent>Blog</FooterContent>
        </FooterDetails>

        <FooterDetails>
          <FooterDetailTitle>Support</FooterDetailTitle>
          <FooterContent>Help & Learning</FooterContent>
          <FooterContent>Support</FooterContent>
          <FooterContent>Forum</FooterContent>
        </FooterDetails>

        <FooterDetails>
          <FooterDetailTitle>Company</FooterDetailTitle>
          <FooterContent>About Us</FooterContent>
          <FooterContent>Career</FooterContent>
          <FooterContent>Resources</FooterContent>
          <FooterContent>Contact</FooterContent>
        </FooterDetails>
      </Container>

      <CopyRightSection>
        COPYRIGHT ALERO GROUP 2020 - TERMS | PRIVACY POLICY | COOKIES
      </CopyRightSection>
    </Wrapper>
  );
};

export default FooterSection;
