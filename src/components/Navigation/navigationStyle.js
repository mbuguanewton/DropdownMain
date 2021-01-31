import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Nav = styled.nav`
  height: 70px;
  background: linear-gradient(
    180deg,
    rgba(249, 180, 40, 0.4) 0%,
    rgba(249, 180, 40, 0.2627) 32.81%,
    rgba(249, 180, 40, 0) 100%
  );
  z-index: 2;
 
`;

export const MobileIcon = styled.div`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  color: blue;
  width: 40px;
  float: right;
  height: 40px;
  position: relative;
  top: 10px;
  z-index: 1;
  opacity: ${({activeMobile})=>(activeMobile ? '0' : '100%')};
  @media all and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenuWrap = styled.div`
  
  @media all and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
align-items:center;
`;


export const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  
`;

export const NavBtn = styled.div`
  color: #3a7a44;
  font-weight: 600;
  border: 3px solid #3a7a44;
  border-radius: 15px;
  padding: 5px 15px;
`;