import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -6;
`;

export const SHeroContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 112px;
`;


export const TextContentWrap = styled.div`
  width: 100%;
`;

export const TextContentHead = styled.div`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  color: #264d2d;
  margin-bottom: 20px;
`;

export const TextContent = styled.p`
  line-height: 20px;
  text-align: center;
  font-size: 15px;
  color: #151515;
  font-weight: 400;
  margin-bottom: 23px;
`;

export const ContentButtonWrap = styled.div`
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  width: 265px;
  margin: auto;
  padding: 16px 57px;
  border-radius: 3rem;
`;

export const Button = styled(Link)`
  text-decoration: none;
  font-size: 19.3902px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;
