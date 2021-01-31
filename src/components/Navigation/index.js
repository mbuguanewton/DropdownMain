import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import {NavData} from '../../data/NavigationData';
import SubMenu from "../SubMenu";
import {
  Nav,
  MobileIcon,
  NavMenu,
  NavBtnWrap,
  NavBtn,
  NavMenuWrap
} from "./navigationStyle";
const Navigation = ({toggle, mobileActive}) => {

  return (
    <Nav>
      <MobileIcon activeMobile={mobileActive}>
        <FaIcons.FaBars onClick={toggle}/>
      </MobileIcon>
      
     <NavMenuWrap>
      <NavMenu>
        {NavData.map((item, index)=>{
            return <SubMenu item={item} key={index}/>
        })}
        <NavBtnWrap>
        <NavBtn>Get A Quote</NavBtn>
      </NavBtnWrap>
      </NavMenu>
      
      </NavMenuWrap>
    </Nav>
  );
};

export default Navigation;
