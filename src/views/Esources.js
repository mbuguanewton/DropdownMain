import React, { useEffect, useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  SupportSection,
} from "../components/common";
import { EsourcesHeroSection, EsourceSection } from "../components/Esouces";
import { pressData, OpenSourceData } from "../data/esourceData";
import { FooterServices } from "../data/footerData";

const Esources = () => {
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
      <EsourcesHeroSection widthCheck={scrollWidth} />
      <EsourceSection pressData={pressData} OpenSourceData={OpenSourceData} />
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Esources;
