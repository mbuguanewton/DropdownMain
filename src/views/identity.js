import React, { useEffect, useState } from "react";
import VisualIdentitySection from '../components/VisualIdentity';
import {
  MobileMenu,
  Navigation,
  FooterSection,
  HeroWork,
  SupportSection,
} from "../components/common";

import {WorkTitle, IdentityWork} from '../data/identityData';
import { FooterServices } from "../data/footerData";
const VisualIdentity = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState();
  let scrolle;
  
  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

   useEffect(() => {
     let scrolle = window.screen.width;

     let total = scrolle;
     setScrollWidth(total);
   }, []);

   const widthChange = () => {
     scrolle = window.screen.width;
     let total = scrolle;
     setScrollWidth(total);
   };

   window.addEventListener("resize", widthChange);

  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation
        menuColor="#FDE1A9"
        toggle={toggle}
        mobileActive={openMobileMenu}
      />
      <HeroWork details={WorkTitle} widthCheck={scrollWidth} />
      <VisualIdentitySection Identity={IdentityWork} />
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default VisualIdentity;
