import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeroWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow:hidden;
  z-index: -6
`;

export const SHeroContainer = styled.div`
  width: 100%;
  height: 100%;
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
    margin-top: 20px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;
export const Image = styled.img`
  width: 221px;
  height: 307.3px;
  z-index: 2;

  @media all and (min-width: 360px) {
    width: 281px;
    height: 307.3px;
  }
  @media all and (min-width: 478px) {
    width: ${({ resize }) => `${resize * 0.7}`}px;
    height: ${({ resize }) => `${resize * 0.7}`}px;
  }
@media all and (min-width: 500px){
    width:350px;
    height:350px;
}

`;

export const Frame1 = styled.div`
  width: 74.19px;
  height: 74.19px;
  border: 1.6833px solid #3a7a44;
  transform: rotate(-3.69deg);
  position: absolute;
  top: 50px;
  z-index: -2;
  left: -23px;

  @media all and (min-width: 360px) {
    top: 30px;
  }
  @media all and (min-width: 478px) {
    top: ${({ resize }) => `${resize * 0.05}`}px;
    left: ${({ resize }) => `${resize * -0.04}`}px;
  }

  @media all and (min-width: 500px){
      top:25px;
      left:-20px;
  }
 
`;

export const Frame2 = styled.div`
  width: 38.81px;
  height: 38.81px;
  background: #a5c77d;
  transform: rotate(9.4deg);
  position: absolute;
  top: 233px;
  z-index: -2;
  left: 113px;
  @media all and (min-width: 360px) {
    top: 254px;
    left: 123px;
  }
  @media all and (min-width: 478px) {
    top: ${({ resize }) => `${resize * 0.6}`}px;
    left: ${({ resize }) => `${resize * 0.35}`}px;
  }
  @media all and (min-width:500px){
      top: 300px;
      left:175px;
  }

`;

export const Frame3 = styled.div`
  width: 130px;
  height: 130px;
  background: #f2c335;
  position: absolute;
  z-index: -2;
  top: 20px;
  left: 70px;

  @media all and (min-width: 360px) {
    top: 10px;
    left: 130px;
  }
  @media all and (min-width: 478px) {
    top: ${({ resize }) => `${resize * 0.008}`}px;
    left: ${({ resize }) => `${resize * 0.39}`}px;
  }
  @media all and (min-width: 500px){
      top:4px;
      left:195px;
  }
 
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
  font-weight:400;
  margin-bottom: 23px;
`;

export const ContentButtonWrap = styled.div`
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  width: 265px;
  margin:auto;
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