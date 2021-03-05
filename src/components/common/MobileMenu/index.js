import React from "react";
import SubMenu from "./subnav";
import { NavData } from "../../../data/NavigationData";

import {
  MobileMenuContainer,
  HeaderSection,
  Icon,
  NavMenuWrap,
  NavMenu,
  NavBtnWrap,
  NavBtn,
  BackgroundImage,
  BgWrap,
  CancelIcon,
} from "./mobileStyles";
const MobileMenu = ({ mobileActive, toggle }) => {
  return (
    <MobileMenuContainer mobileActive={mobileActive}>
      <BgWrap>
        <BackgroundImage src='' />
      </BgWrap>

      <HeaderSection>
        <Icon>
          <CancelIcon src='' onClick={toggle} />
        </Icon>
      </HeaderSection>

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
    </MobileMenuContainer>
  );
};

export { MobileMenu };
