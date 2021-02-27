import styled from 'styled-components';

export const TopWrapper = styled.div`
  margin-bottom: 54px;
  
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  background: url(${({ sbg }) => sbg}) no-repeat;
  background-size: cover;
  
  width: 400px;
  height:200px;
`;

export const ContentDetailWrapper = styled.div`
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({bgColor})=>(bgColor)};
  box-shadow: 0px 7.06746px 18.4841px rgba(0, 0, 0, 0.129);
  border-radius: 2.71825px;
  margin-bottom: 56px;
`;
export const ContentWrapper = styled.div`
  font-weight: 300;
  font-size: 35px;
  line-height: 49px;
  width: 80%;
  margin-bottom: 23px;
`;

export const ContentText = styled.p``;

export const ContentMainTextWrapper = styled.div`
  width: 80%;
  font-size: 14px;
  line-height: 18px;
  color: #000000;


`;

export const ContentMainText = styled.p`
  font-weight: 400;
  text-align: justify;
  font-family: Noto Sans;
`;

export const ContentSubDetailWrapper = styled.div`
display:flex;
justify-content:center;
`;

export const ContentSubText = styled.p`
text-align:center;
width: 80%;
font-weight: 400px;
line-height:24px;
font-size:20px;
`;

