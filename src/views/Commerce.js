import React, { useState } from "react";
import { MobileMenu, Navigation, FooterSection } from "../components/common";
import { ServiceHeroSection, Lists } from "../components/ServiceCommerce";
import { FooterServices } from "../data/footerData";
import {EcommerceServices, EcommerceData} from '../data/EcommerceData';
const Commerce = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <ServiceHeroSection />
      <Lists TabsData={EcommerceServices} />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Commerce;
