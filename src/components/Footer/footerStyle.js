import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media all and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 0.8fr 0.3fr 0.2fr 0.2fr 0.2fr;
  }
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

export const LogoSection = styled.img`
  margin-top: 30px;
`;

export const CompanyHighlight = styled.div`
  font-size: 17px;
  color: #022211;
  text-align: center;
  margin-top: 19px;
  font-weight: 600;
`;

export const ContactDetails = styled.div`
  margin-top: 18px;
  text-align: center;
  font-weight: 500;
  line-height: 20px;
  color: #022211;
`;

export const Mobile = styled.p`
  margin-bottom: 3px;
`;

export const EmailDetails = styled.p``;

export const SocialMediaPlatforms = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

  color: green;

  @media all and (min-width: 500px) {
  }
  @media all and (min-width: 1000px) {
    width: 200px;
  }
`;

export const ServicesDetails = styled.div`
  text-align: center;
  margin-top: 31px;
  @media all and (min-width: 1000px){
    text-align: left;
  }
`;

export const ServiceTitle = styled.h5`
  font-size: 21px;
  line-height: 29px;
  margin-bottom: 14px;
`;
export const ServiceContent = styled.p`
  font-size: 17px;
  line-height: 24px;
  color: #022211;
  margin-bottom: 2px;
`;

export const FooterDetails = styled.div`
  text-align: center;
  margin-top: 31px;
  @media all and (min-width: 1000px) {
    &#discover {
      display: none;
    }
    &#support {
      text-align: left;
    }
    &#company {
      text-align: left;
    }
  }
`;

export const FooterDetailTitle = styled.h5`
  font-size: 21px;
  line-height: 29px;
  margin-bottom: 14px;
`;

export const FooterContent = styled.p`
  font-size: 17px;
  line-height: 24px;
  color: #022211;
  margin-bottom: 2px;
`;

export const CopyRightSection = styled.div`
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ababab;
  text-align: center;
  font-weight: 600;
  line-height: 14px;
`;
