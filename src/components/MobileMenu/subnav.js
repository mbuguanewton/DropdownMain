import React, { useState } from "react";
import {
  SideMenuLink,
  SideIcon,
  SideMenuItem,
  SideMenuWrap,
  DropdownLink,
  SideMenuDropItem,
  Wrapper,
  SideMenuContainer,
} from "./subnavstyles";
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <SideMenuContainer>
        <SideMenuLink to={item.path} onClick={item.subNav && showSubnav}>
          <SideMenuWrap>
            <SideMenuItem>{item.title}</SideMenuItem>
          </SideMenuWrap>

          <SideIcon>
            {item.subNav && subnav ? item.icon : item.subNav ? item.icon : null}
          </SideIcon>
        </SideMenuLink>
        <Wrapper>
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  <div>
                    <SideMenuDropItem>{item.title}</SideMenuDropItem>
                  </div>
                </DropdownLink>
              );
            })}
        </Wrapper>
      </SideMenuContainer>
    </>
  );
};

export default SubMenu;
