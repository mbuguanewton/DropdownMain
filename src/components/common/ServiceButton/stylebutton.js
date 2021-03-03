import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
height: 100%;
margin-bottom: 70px;
`;

export const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const Frame = styled.div`
  background: #f2c335;
  width: 75.18px;
  height: 75.18px;
  transform: rotate(-10.29deg);
  margin-bottom: 20px;

  @media (min-width:768px) and (max-width: 1365px){
    margin-bottom:50px;
  }
`;

export const ContentText = styled.h5`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 34px;
  text-align: center;
  width: 80%;

  @media all and (min-width: 360px) {
    width: 288px;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin-bottom: 50px;
    width: 600px;
  }
`;