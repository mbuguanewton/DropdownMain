import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InsideWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 112px;
  @media all and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
  @media all and (min-width: 1000px) {
    width: 950px;
  }
  @media all and (min-width: 1366px) {
    width: 1090px;
    margin-bottom: 112px;
  }
`;
export const TitleT = styled.h5`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight: bold;
  font-size: 21px;
  line-height: 29px;
  margin-top: 20px;
  @media all and (min-width: 768px) {
    font-size: 43.47px;

    line-height: 69px;
  }

  @media all and (min-width: 1366px) {
    line-height: 49px;
    text-align: left;
    width: 1090px;
    margin: auto;
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const SubText = styled.p`
  font-weight: 500;
  color: #f29a2e;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 40px;
  @media all and (min-width: 768px) {
    text-align: center;
    justify-content: center;
    color: #151515;
    font-size: 28px;
    line-height: 20px;
    margin-bottom: 50px;
  }
  @media all and (min-width: 1366px) {
    justify-content: left;
    width: 1090px;
    margin: auto;
    margin-bottom: 70px;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  background-color: transparent !important;
  @media all and (min-width: 1000px) {
    width: 100%;
  }

  @media all and (min-width: 1366px) {
    width: 1090px;
    .slidedetails {
      height: 100%;
      width: 100% !important;
      background-color: inherit !important;
      filter: drop-shadow(11px 11px 30px rgba(0, 0, 0, 0.11));
    }
    .swipperContainer {
      height: 600px;
      width: 1090px;
      filter: drop-shadow(11px 11px 30px rgba(0, 0, 0, 0.11));

      background: transparent !important;
    }
  }
`;

export const TestimonyWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 

  border-radius: 5px;
  width: 100%;
  margin: auto;

  @media all and (min-width: 1366px) {
    flex-direction: row;
    align-items: top;
    height: 400px;
    background:#ffffff;
    filter: drop-shadow(13px 13px 30px rgba(0, 0, 0, 0.11));
    width: 900px;
    margin-top: 100px;
  }
`;
export const TestContainer = styled.div``;
export const PostImageWrapper = styled.div`
text-align:center;
padding-top: 20px;
paddig-bottom: 20px;

@media all and (min-width: 1366px){
    margin-right: 70px;
    position:relative;
    padding-top: 0;
    top: -120px;
     z-index:20;
`;

export const ImageContent = styled.img`
  @media all and (min-width: 1366px) {
    width: 191px;
    height: 191px;
    position: relative;
  }
`;

export const NameContent = styled.p`
  font-size: 16px;
  line-height: 21px;

  @media all and (min-width: 1366px) {
    font-size: 35px;
    line-height: 47px;
    margin-top: 8px;
  }
`;

export const CompanyContent = styled.p`
  margin-bottom: 20px;
  font-size: 9.67px;
  font-weight: 400;
  @media all and (min-width: 1366px) {
    font-size: 21px;
    line-height: 47px;
  }
`;

export const ContentWrapper = styled.div``;
export const LogoDetails = styled.img`
  display: none;
  @media all and (min-width: 1366px) {
    display: block;
    width: 66px;
    height: 125px;
    margin-bottom: 20px;
  }
`;
export const TestimonyContent = styled.p`
  text-align: center;
  font-size: 15px;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;

  @media all and (min-width: 768px) {
    margin-bottom: 60px;
    width: 60%;
  }
  @media all and (min-width: 1366px) {
    font-size: 22px;
    line-height: 32px;
    width: 540px;
    text-align: left;
  }
  @media all and (min-width: 1300px) {
  }
`;
export const SliderNavigation = styled.div``;
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
    fill: ${({ PrevColor }) => PrevColor};
    opacity: ${({ opacityPrev }) => opacityPrev};
  }
  svg {
    width: 76px;
    height: 43px;
  }
  position: absolute;
  top: 270px;
  z-index: 20;
  left: -20px;
`;

export const SliderRight = styled.div`
  color: blue;
  path {
    fill: ${({ nextColor }) => nextColor};
    opacity: ${({ opacityNext }) => opacityNext};
  }
  svg {
    width: 76px;
    height: 43px;
  }
  margin-left: 20px;
  position: absolute;
  top: 270px;
  z-index: 20;
  right: -20px;
`;
