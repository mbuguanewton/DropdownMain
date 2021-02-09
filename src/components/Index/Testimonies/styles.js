import styled from 'styled-components';

export const Wrapper = styled.section`
width: 100%;
height: 100%;
overflow: hidden;
`;

export const InsideWrapper = styled.div`
width: 100%;
height: 100vh;

@media all and (min-width: 768px){
width: 80%;
margin: auto;
}
@media all and (min-width: 1000px){
    width: 950px;
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
  @media all and (min-width: 1000px) {
    text-align: left;
    
  }
`;

export const SubText = styled.p`
  font-weight: 500;
  color: #f29a2e;
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 40px;
  @media all and (min-width: 1000px) {
    text-align: left;
    justify-content: left;
    font-size: 33px;
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;

  @media all and (min-width: 1000px) {
    width: 100%;
  }
`;

export const TestimonyWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 21px 45px rgba(58, 122, 68, 0.2);
  border-radius: 5px;
  width: 100%;
  margin: auto;

  @media all and (min-width: 1000px) {
    flex-direction: row;
    align-items: top;
    height: 447px;
    width: 1000px;
  }
`;

export const PostImageWrapper = styled.div`
text-align:center;
padding-top: 20px;
paddig-bottom: 20px;

@media all and (min-width: 1000px){
    margin-right: 70px;
    position:relative;
    padding-top: 0;
    top: -120px;
}
`;

export const ImageContent = styled.img`
@media all and (min-width: 1000px){
    width: 191px;
    height: 191px;
}
`;

export const NameContent = styled.p`
  font-size: 16px;
  line-height: 21px;

  @media all and (min-width: 1000px) {
    font-size: 35px;
    line-height: 47px;
  }
`;

export const CompanyContent = styled.p`
  margin-bottom: 20px;
  font-size: 9.67px;
  font-weight: 400;
  @media all and (min-width: 1000px) {
    font-size: 21px;
    line-height: 47px;
  }
`;

export const ContentWrapper = styled.div``
export const LogoDetails = styled.img`
display: none;
@media all and (min-width: 1000px){
    display: block;
    width:66px;
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
  @media all and (min-width: 1000px) {
    font-size: 29px;
    line-height: 40px;
    width: 566px;
    text-align: left;
  }
`;