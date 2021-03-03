import React, { useEffect, useState } from "react";
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
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <BrandingHeroSection widthCheck={scrollWidth} />
      <Lists listStyle='2' TabsData={BrandingServices} serviceData={BrandingData} />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Branding;
