import React from "react";
import aleroLogo from '../../../assets/Images/AleroLogo/icon.svg';
import { FiMenu } from "react-icons/fi";
import { NavData } from "../../../data/NavigationData";
import SubMenu from "../SubMenu";
import {
  Nav,
  MobileIcon,
  NavMenu,
  NavBtnWrap,
  NavBtn,
  NavMenuWrap,
  LogoIcon,
  MenuIconWrap,
} from "./navigationStyle";
const Navigation = ({ toggle, mobileActive, menuColor, displayfalse }) => {
  return (
    <Nav menuColor={menuColor}>
      <MenuIconWrap displayfalse={displayfalse}>
        <LogoIcon displayfalse={displayfalse}>
          <img src={aleroLogo} alt="Alero" />
        </LogoIcon>
        <MobileIcon activeMobile={mobileActive}>
          <FiMenu onClick={toggle} />
        </MobileIcon>
      </MenuIconWrap>

      <NavMenuWrap>
        <NavMenu>
          {NavData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
          <NavBtnWrap>
            <NavBtn>Get A Quote</NavBtn>
          </NavBtnWrap>
        </NavMenu>
      </NavMenuWrap>
    </Nav>
  );
};

export { Navigation };
