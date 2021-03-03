
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

  @media (min-width:768px) and (max-width:1366px){
    width:768px;
    margin:auto;
  }
`;

export const Frame1 = styled.div`
  transform: rotate(-13.61deg);
  border: 1.18523px solid #3a7a44;
  width: 16.59px;
  height: 16.59px;
  position: absolute;
  top: 4rem;
 

  
`;

export const Frame2 = styled.div`
  background: #a5c77d;
  width: 27.03px;
  height: 27.03px;
  position: absolute;
  left: ${({ widthset }) => `${widthset * 0.67}px`};
  top: -3.5rem;

  @media (min-width:768px) and (max-width:1366px){
    left:514.56px;
  }
`;

export const Frame3 = styled.div`
  background: #f2c335;
  transform: rotate(20.38deg);
  width: 12.74px;
  height: 12.74px;
  position: absolute;
  top: 4rem;
  left: ${({ widthset }) => `${widthset * 0.94}px`};
  @media (min-width: 768px) and (max-width: 1366px) {
    left: 721.92px;
  }
`;
export const TextContentHead = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 44px;
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
  @media (min-width:768px) and (max-width:1366px){
    width: 691.2px;
  }
`;

export const TextContent = styled.p`
  line-height: 26px;
  text-align: center;
  font-size: 20px;
  color: #151515;
  font-weight: 400;
  width: 70%;
  margin: auto;
  margin-top: 31px;
  margin-bottom: 23px;

  @media all and (max-width: 320px) {
    width: 80%;
    font-size: 16px;
    line-height: 23px;
  }
  @media (min-width: 768px) and (max-width: 1366px) {
    width: 691.2px;
  }
`;


