import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ContentButtonWrap = styled.div`
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  width: 265px;
  margin: auto;
  padding: 16px 57px;
  border-radius: 3rem;
`;

export const ButtonText = styled(Link)`
  text-decoration: none;
  font-size: 19.3902px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  width:100%;
  display:flex;
  justify-content:center;
  `;
