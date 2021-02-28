import React, { useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  HeroWork,
  SupportSection,
} from "../components/common";
import WorkSection from "../components/ProjectWork/WorkSection";
import {WorkTitle} from '../data/identityData';
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
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default VisualIdentity;
