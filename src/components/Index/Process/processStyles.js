import styled from 'styled-components';

export const ProcessWrapper = styled.div`
width: 100%;
height: 100vh;
overflow:hidden;
display:none;

@media all and (min-width: 768px){
    display:block;
}
`;

export const ProcessTitle = styled.div`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight: bold;
  font-size: 21px;
  line-height: 29px;
  margin-top: 20px;
  margin-bottom: 100px;

  @media all and (min-width: 1000px){
    margin-bottom: 0;
  }
`;

export const ProcessContainer = styled.div`
position: relative;
width: 90%;
margin: auto;
@media all and (min-width:1000px){
  width: 900px;
}
`;

export const ProcessImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  left: ${({ leftCalc, mediumSizeLeft }) => `${leftCalc * mediumSizeLeft}px`};
  top: ${({ mediumSizetop }) => mediumSizetop};

  @media all and (min-width: 1000px) {
    left: ${({  mediumSizeLeft }) => `${1000 * mediumSizeLeft}px`};
    top: ${({ mediumSizetop }) => mediumSizetop};
  }
`;

export const ProcessImage = styled.img`
  width: 100px;
  height: 100px;
  @media all and (min-width:1000px){
    width: 230px;
    height: 250px;
  }
`;

export const ProcessContent = styled.div`
  width: 50%;

  text-align: center;
  font-size: 12px;
  @media all and (min-width: 1000px) {
    font-size: 18px;
    width: 80%;
  }
`;

export const BgLineImage = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 70px;
`;

export const BgImage = styled.img`
  width: 100%;
  
`;