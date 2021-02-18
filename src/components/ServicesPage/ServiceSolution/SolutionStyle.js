import styled from 'styled-components';

export const SolutionWrapper = styled.section`
width: 100%;
height: 100%;
overflow:hidden;
`;

export const SolutionContainer = styled.div`
margin-bottom: 112px;
width: 100%;
height:100%;
`;

export const ContentText = styled.p`
font-size: 19.61px;
line-height: 19.78px;
font-weight:500;
display:flex;
justify-content:center;
align-items:center;
width: 95%;
margin:auto;
margin-bottom:15px;

@media all and (min-width: 365px){
    width: 356px;
}
`;

export const ContentSolutionWrapper = styled.div`
 width: 100%;
`;

export const ContentSolution = styled.div`
  width: 214px;
  height: 339.64px;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SolutionText = styled.div`
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 23.55px;
  line-height: 32px;
  color: #ffffff;
`;
