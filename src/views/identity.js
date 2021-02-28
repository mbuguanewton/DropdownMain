import React, { useState } from "react";
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
  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <HeroWork details={WorkTitle} />
      <VisualIdentitySection Identity={IdentityWork}/>
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default VisualIdentity;
