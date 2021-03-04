import React, { useState } from 'react'
import Section404 from '../components/404';
import { FooterServices } from "../data/footerData";
import {
  MobileMenu,
  Navigation,
  FooterSection,
} from "../components/common";
const Page404 = () => {
    const [openMobileMenu, setMobileMenu] = useState(false);
      const toggle = () => {
        setMobileMenu(!openMobileMenu);
      };
    return (
      <>
        <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
        <Navigation
          menuColor="#FEF0D4"
          toggle={toggle}
          mobileActive={openMobileMenu}
        />
        <Section404 />
        <FooterSection FServices={FooterServices} />
      </>
    );
}

export default Page404;
