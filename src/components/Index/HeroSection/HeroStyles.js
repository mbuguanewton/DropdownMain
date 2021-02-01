import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(249, 180, 40, 0.4) 0%,
    rgba(249, 180, 40, 0.2627) 32.81%,
    rgba(249, 180, 40, 0) 100%
  );
`;

export const HeroContainer = styled.div`
width:100%;
height:100%;

`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  
  position: relative;
  left: 40px;
`;

export const Logo = styled.img`
width: 95px;
height:95px;
position:relative;
left: 26.22px;
`;

export const CompanyName = styled.span`
  color: #264d2d;
  font-weight:600;
  font-size: 35px;
  text-align:center;
  margin-top:13px;
  height:35.66px;
  width: 144.94px;
`;

export const ContentSection = styled.div`
position:relative;
left: 40px;
`;

export const Content = styled.h4`
  width: 290px;
  height: 193px;
  font-weight:600;
  font-size:33.66px;
  line-height:43.16px;
  margin-top: 48px;
`;

export const ContentSubText = styled.p`
margin-top:23px;
font-weight: 400;
font-style: italic;
font-size: 18px;
line-height:23.98px;
height:18px;
width: 290px;

`;

export const ButtonWrapper = styled.div`
  margin-top: 78px;
  text-align:center;
`;

export const Button = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 19.46px;
  line-height: 26.51px;
  color: #ffffff;
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  padding: 16px 61px;
  border-radius: 2rem;
`;
