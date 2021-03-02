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
  width: 90%;
  margin:auto;
  position:relative;
`;
export const Frame1 = styled.div`
  transform: rotate(-13.61deg);
  border: 1.18523px solid #3a7a44;
  width: 16.59px;
  height: 16.59px;
  position:absolute;
  top: 5rem;

`;
export const Frame2 = styled.div`
  background: #a5c77d;
  width: 27.03px;
  height: 27.03px;
  position: absolute;
  left: ${({ widthset }) => `${widthset * 0.67}px`};
  top: -3.5rem;
`;
export const Frame3 = styled.div`
  background: #f2c335;
  transform: rotate(20.38deg);
  width: 12.74px;
  height: 12.74px;
  position: absolute;
  top: 5rem;
  left: ${({ widthset }) => `${widthset * 0.84}px`};
`;
export const TextContentHead = styled.div`
  font-weight: 600;
  font-size: 47px;
  line-height: 54px;
  text-align: center;
  color: #264d2d;
  width: 90%;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 20px;
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
  margin-top:50px;
  margin-bottom: 23px;
`;
