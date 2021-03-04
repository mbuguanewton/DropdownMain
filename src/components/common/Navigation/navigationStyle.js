import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  background: ${({menuColor})=>(menuColor)};
  z-index: 2;
`;
export const MenuIconWrap = styled.div`
  display: ${({ displayfalse }) => (displayfalse ? "block" : "flex")};
  justify-content: space-between;
  @media all and (min-width: 999px) {
    display: none;
  }
`;
export const LogoIcon = styled.div`
  margin-left: 30px;
  display: ${({ displayfalse }) => (displayfalse ? "none" : "block")};
  img {
    width: 53.42px;
    height: 66.12px;
    
  }
`;
export const MobileIcon = styled.div`
  font-size: 2rem;

  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  color: #264d2d;
  
  width: 40px;
  float: right;
  height: 40px;
  position: relative;
  top: 10px;
  z-index: 1;
  opacity: ${({ activeMobile }) => (activeMobile ? "0" : "100%")};
  @media all and (min-width: 999px) {
    display: none;
  }
`;

export const NavMenuWrap = styled.div`
  
  @media all and (max-width: 1000px) {
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
  @media all and (max-width: 797px){
    padding: 5px 10px;
    font-size: 13px;
  }
`;