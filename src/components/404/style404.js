import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fef0d4 0%, #fef5e3 32.81%, #ffffff 100%);
`;

export const Container = styled.div`
margin-bottom: 128px;
`;

export const TextContent = styled.h2`
  width: 90%;
  margin: auto;
  font-weight: 600;
  font-size: 49.8052px;
  line-height: 68px;
  text-transform: uppercase;
  padding-top: 91px;
  margin-bottom: 21px;

  @media all and (min-width: 716px){
      width:644.4px;
  }
`;

export const DetailButton = styled(Link)`
  text-decoration: none;
  color: #3a7a44;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: auto;

  @media all and (min-width: 716px) {
    width: 644.4px;
  }
`;
export const BtnText = styled.p`
  margin-right: 4px;
`;