import React, { useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  Lists,
} from "../components/common";
import { BrandingHeroSection } from "../components/Branding";
import { FooterServices } from "../data/footerData";
import { BrandingServices, BrandingData } from "../data/BrandingData";

const Branding = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <BrandingHeroSection />
      <Lists TabsData={BrandingServices} serviceData={BrandingData} />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Branding;
