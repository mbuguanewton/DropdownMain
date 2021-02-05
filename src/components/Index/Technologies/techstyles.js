import styled from "styled-components";

export const TechWrapper = styled.div`
  width: 100vw;
  height: 100%;
`;

export const TechTitle = styled.div`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight: bold;
  font-size: 21px;
  line-height: 29px;
  margin-top: 20px;
`;

export const TechContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TechImageWrap = styled.div`
  height: ${({ SouterHeight }) => SouterHeight};
  width: ${({ SouterWidth }) => SouterWidth};
  background: #ffffff;
  box-shadow: 11.864px 11.864px 31.0724px rgba(0, 0, 0, 0.129);
  border-radius: 4.7117px;
  display: ${({ area }) =>
    area === "Ios" || area === "Node" || area === "Trello" ? "none" : "flex"};
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${({leftCalc})=>(leftCalc)};
`;

export const TechImage = styled.img`
  width: ${({ Swidth }) => Swidth};
  height: ${({ Sheight }) => Sheight};
`;

export const SliderContentWrap = styled.div`
padding-top: 78px;
padding-bottom: 78px;
`;

export const SliderCard = styled.div``;

export const SliderCardContent = styled.div``;

export const SliderHead = styled.h4``;

export const SliderText = styled.span``;

export const SliderNavigation = styled.div``;

export const SliderLeft = styled.img``;

export const SliderRight = styled.img``;
