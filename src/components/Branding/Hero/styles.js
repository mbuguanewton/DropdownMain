import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -6;
  background: linear-gradient(180deg, #fde1a9 0%, #fdebc7 32.81%, #ffffff 100%);
`;

export const SHeroContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 112px;
`;


export const TextContentWrap = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 491px) and (max-width: 767px) {
    width: 491px;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    width: 768px;
    margin: auto;
  }
`;

export const Frame2 = styled.div`
  background: #a5c77d;
  width: 27.03px;
  height: 27.03px;
  position: absolute;
  left: ${({ widthset }) => `${widthset * 0.08}px`};
  top: -1.5rem;
  
@media (min-width:491px) and (max-width:767px){
  left:39.28px
}
  @media (min-width: 768px) and (max-width: 1366px) {
    left: 74.56px;
  }
`;

export const Frame3 = styled.div`
  background: #f2c335;
  transform: rotate(20.38deg);
  width: 12.74px;
  height: 12.74px;
  position: absolute;
  top: 10rem;
  left: ${({ widthset }) => `${widthset * 0.94}px`};
  @media (min-width: 491px) and (max-width: 767px) {
    left: 461.54px;
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    left: 721.92px;
  }
`;
export const TextContentHead = styled.div`
  font-weight: 600;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  color: #264d2d;
  width: 90%;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 20px;

  @media all and (max-width: 320px) {
    font-size: 35px;
    line-height: 36px;
    width: 93%;
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    width: 591.2px;
  }
`;

export const TextContent = styled.p`
  line-height: 26px;
  text-align: center;
  font-size: 18px;
  color: #151515;
  width: 90%;
  margin: auto;
  font-weight: 400;
  margin-top: 31px;
  margin-bottom: 43px;

  @media all and (max-width: 320px) {
    width: 80%;
    font-size: 16px;
    line-height: 23px;
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    width: 591.2px;
  }
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
