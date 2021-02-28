import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #3a7a44;
`;

export const Container = styled.div`
  
  color:white;
  padding-top:20px;
  padding-bottom: 20px;
  text-align:center;
  @media all and (min-width: 1000px){
      display: flex;
      width: 1000px;
      margin:auto;
      align-items:center;

  }


`;

export const SupportText = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 20px;

  @media all and (min-width: 1000px) {
    width: 719px;
    font-size: 20px;
    padding: 36px 46px;
  }
`;

export const SupportBtnWrap = styled.div`
  border: 2px solid white;
  width: 181px;
  margin: auto;
  border-radius: 50px;
  padding: 15px 30px;

  @media all and (min-width: 1000px) {
    width: 181px;
    font-size: 15px;
    padding: 20px 40px;
  }
`;

export const Button = styled(Link)`
text-decoration:none;
color: white;
outline:none;
`;