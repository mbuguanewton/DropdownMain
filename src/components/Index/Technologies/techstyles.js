import styled from "styled-components";

export const TechWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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

  @media all and (min-width: 1400px){
    
    width: 80%;
    margin: auto;
  }
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
  left: ${({ leftCalc, smSizeLeft }) => `${leftCalc * smSizeLeft}px`};
  top: ${({ smSizetop }) => smSizetop};

  @media all and (min-width: 768px) {
    display: flex;
    left: ${({ leftCalc, mediumSizeLeft }) => `${leftCalc * mediumSizeLeft}px`};
    top: ${({ mediumSizetop }) => mediumSizetop} !important;
  }
`;

export const TechImage = styled.img`
  width: ${({ Swidth }) => Swidth};
  height: ${({ Sheight }) => Sheight};
`;

export const SliderContentWrap = styled.div`
padding-top: 168px;
padding-bottom: 78px;
text-align:center;
width: 90%;
margin:auto;

@media all and (min-width: 549px){
  width: 504px;
  height: 347px;
}


`;

export const SliderCard = styled.div`
  height: 189.72px;
  background: #ffffff;
  box-shadow: 0px 8.73369px 25.6449px rgba(58, 122, 68, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9.7041px;

  @media all and (min-width: 1400px) {
    height: 300px;
    box-shadow: 0px 8.73369px 25.6449px rgba(58, 122, 68, 0.6);
  }
`;

export const SliderCardContent = styled.div`

`;

export const SliderHead = styled.h4`
  font-size: 19.95px;
  color: #f29a2e;
  @media all and (min-width: 549px){
    font-size: 25px;
    font-weight: 600;
    line-height: 46px;
  }
`;

export const SliderText = styled.div`
  font-size: 12.42px;
  color: #ababab; 
  @media all and (min-width: 549px){
  width: 504px;
  height: 50px;
  font-size: 21px;
}
`;

export const SliderNavigation = styled.div`
display:flex;
width: 90%;
position:relative;
justify-content:flex-end;

`;

export const NavigationWrapper = styled.div`
  display: flex;
  width: 45px !important;
  height: 32px !important;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SliderLeft = styled.div`
  color: red;
  path {
    fill: ${({PrevColor})=>(PrevColor)};
    opacity:${({opacityPrev})=>(opacityPrev)};
  }
  svg {
    width: 26px;
    height: 13px;
  }
  
`;

export const SliderRight = styled.div`
  color: blue;
  path {
    fill: ${({ nextColor }) => nextColor};
    opacity: ${({ opacityNext }) => opacityNext};
  }

  margin-left: 20px;
`;
