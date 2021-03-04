import styled from 'styled-components';

export const ProcessWrapper = styled.div`
width: 100%;
height: 100%;
overflow:hidden;
display:none;

@media all and (min-width: 768px){
    display:block;
}
`;
export const Wrapper = styled.div`
width:100%;
height: 100%;
margin:auto;
margin-bottom: 412px;

@media all and (min-width:1366px){
  width: 1090px;
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
  @media all and (min-width: 768px) {
    font-size: 43.47px;

    line-height: 69px;
  }

  @media all and (min-width: 1366px) {
    text-align: left;
    width: 1090px;
    margin: auto;
    font-size: 20px;
  }
`;
export const ProcessTextWrap = styled.div`
width:1090px;
margin: auto;
`;
export const ProcessText = styled.p`
display: none;

@media all and (min-width: 1366px){
  display:block;
  width: 827px;
  height: 62px;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  
  margin-bottom: 50px;
}
`
export const ProcessContainer = styled.div`
position: relative;
width: 90%;
margin: auto;
@media all and (min-width:1000px){
  width: 900px;
}
@media all and (min-width:1366px){
  width: 1090px;
}
`;

export const ProcessImageWrapper = styled.div`
  width: 119px;
  height: 119px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  left: ${({ leftCalc, mediumSizeLeft }) => `${leftCalc * mediumSizeLeft}px`};
  top: ${({ mediumSizetop }) => mediumSizetop};

  @media all and (min-width: 1000px) {
    left: ${({ mediumSizeLeft }) => `${1000 * mediumSizeLeft}px`};
    top: ${({ mediumSizetop }) => mediumSizetop};
  }
  @media all and (min-width: 1366px) {
    left: ${({ LSizeLeft }) => `${1000 * LSizeLeft}px`};
    top: ${({ LSizetop }) => LSizetop};
    
  }
`;

export const ProcessImage = styled.img`
  width: 159px;
  height: 159px;

  @media all and (min-width: 1000px) {
    width: 169px;
    height: 169px;
  }
  @media all and (min-width: 1300px) {
    width: 200px;
    height: 200px;
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
  @media all and (min-width: 1300px) {
    width: 100%;
  }
`;

export const BgLineImage = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 70px;

`;

export const BgImage = styled.img`
  width: 100%;
  @media all and (min-width: 1300px){
    height: 140px;
    width: 945px;
  }
`;