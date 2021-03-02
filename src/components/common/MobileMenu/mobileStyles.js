import styled from "styled-components";
export const MobileMenuContainer = styled.aside`
  height: 100%;
  width: 100%;
  position: fixed;
  align-items: center;
  transition: all 0.2s ease-in-out;
  opacity: ${({ mobileActive }) => (mobileActive ? "100%" : "0")};
  top: ${({ mobileActive }) => (mobileActive ? "0" : "-100%")};
  background: linear-gradient(180deg, #fde1a9 0%, #fdebc7 32.81%, #ffffff 100%);
  z-index: 5;
  overflow: hidden;
  @media all and (min-width: 1000px) {
    display: none;
  }
`;

export const BgWrap = styled.div`
position:absolute;
right: 0vw;
top: 19vw;

`;
export const BackgroundImage = styled.img`

`;
export const HeaderSection = styled.div`
  position: relative;
  height: 80px;
  align-items: center;
  
`;
export const Icon = styled.div`
  font-size: 2rem;
  color:#3A7A44;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  width: 40px;
  float: right;
  height: 40px;
  position: relative;
  top: 10px;
  z-index: 5;
`;
export const CancelIcon = styled.img``
export const NavMenuWrap = styled.div`
position: relative;
top: 80px;
width:100%;
z-index: 10;
  @media all and (min-width: 1000px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  display: grid;
  position:relative;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const NavBtnWrap = styled.div`
 display: none;
  
`;

export const NavBtn = styled.div`
  color: #3a7a44;
  font-weight: 600;
  border: 3px solid #3a7a44;
  border-radius: 15px;
  padding: 5px 15px;
`;
