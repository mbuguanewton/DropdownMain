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
  position:relative;
  margin-bottom: 112px;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  @media all and (min-width: 360px) {
    margin-top: 60px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;

  @media (min-width:768px) and (max-width: 1365px){
    width: 768px;

  }
`;
export const Image = styled.img`
  width: 271px;
  height: 271.3px;
  z-index: 2;
  object-fit: contain;
  @media all and (min-width: 360px) {
    width: 340px;
    height: 307.3px;
    object-fit: contain;
  }

  @media (min-width: 768px) and (max-width: 1365px) {
    width: 100%;
    height: 300px;
    
  }
`;



export const TextContentWrap = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  @media all and (max-width:355px ){
    width: 100%;
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
  left: 169.2px;
  top: 1.8rem;
  @media (min-width: 491px) and (max-width: 767px) {
   
  }
  @media (min-width: 768px) and (max-width: 1365px) {
   left: 370px;
   top:-1.6rem;
  }
`;

export const Frame3 = styled.div`
  background: #f2c335;
  transform: rotate(20.38deg);
  width: 12.74px;
  height: 12.74px;
  position: absolute;
  top: 13.5rem;
  left: 319.4px;

  @media (min-width: 491px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    left: 610px;
    top: 15.5rem;
  }
`;

export const TextContentHead = styled.div`
  font-weight: 600;
  font-size: 47px;
  line-height: 54px;
  width: 90%;
  margin: auto;
  text-align: center;
  color: #264d2d;
  margin-bottom: 20px;

  @media all and (max-width: 333px) {
    font-size: 40px;
  }
`;

export const TextContent = styled.p`
  line-height: 20px;
  text-align: center;
  font-size: 30px;
  line-height: 41px;
  color: #151515;
  font-weight: 400;
  width: 80%;
  margin: auto;
  margin-top: 50px;
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
