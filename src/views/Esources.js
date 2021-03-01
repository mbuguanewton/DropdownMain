import React, { useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  SupportSection,
} from "../components/common";
import { EsourcesHeroSection, EsourceSection } from "../components/Esouces";
import {pressData, OpenSourceData} from '../data/esourceData';
import { FooterServices } from "../data/footerData";


const Esources = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <EsourcesHeroSection />
      <EsourceSection pressData={pressData} OpenSourceData={OpenSourceData} />
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Esources;
