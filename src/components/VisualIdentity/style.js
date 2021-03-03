import styled from 'styled-components';
export const Wrapper = styled.div`
width:100%;
height:100%;
`;

export const Container = styled.div`
width:100%;
height:100%;
margin-bottom: 80px;
`;

export const ContentHead = styled.p`
  width: 70%;
  text-align:center;
  margin: auto;
  color: #ff4a22;
  font-style: italic;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  @media all and (max-width: 280px) {
    margin-top: 40px;
  }
`;
export const ContentDetailWrapper = styled.div`
  z-index: 20;
  background: transparent;
  width: 338px;
  margin: auto;
`;
export const Content = styled.div`
  width: 338px;
  margin: auto;
  margin-bottom: 30px;
  height: 338px;
  z-index: -2;
  text-align: center;
  box-shadow: 0px 8.1301px 12.1952px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  .image {
    width: 256px;
    height: 167px;
   z-index:-2;
    
    @media all and (max-width: 280px) {
      width: 240px;
      height: 172px;
    }
  }
`;

export const ContentTextWrap = styled.div`
text-align:center;
`;

export const ContentText = styled.h5`
font-weight:500;
line-height:41px;
font-size:30px;

`;

export const ContentSubText = styled.p`
  color: #9c9fa1;
  font-size: 18px;
  line-height: 29px;
`;

