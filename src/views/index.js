/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { MobileMenu, Navigation, FooterSection } from "../components/common";
import {
  HeroSection,
  ProcessSection,
  RecentWork,
  ServicesSection,
  TechSection,
  TestimonySection,
  SupportSection,
} from "../components/Index";

import { WorkData } from "../data/RecentWorkData";
import { ServicesData } from "../data/ServicesData";
import { ImageData, InfoData } from "../data/TechData";
import { ProcessData } from "../data/ProcessData";
import { Testimonies } from "../data/TestimoniesData";
import { FooterServices } from "../data/footerData";
const Home = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState();
  let scrolle;

  useEffect(() => {
    scrolle = window.screen.width;
    let total = scrolle;
    setScrollWidth(total);
  }, []);
  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

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
      <HeroSection />
      <RecentWork recentData={WorkData} />
      <ServicesSection serviceData={ServicesData} />
      <TechSection
        LogoData={ImageData}
        leftCalc={scrollWidth}
        InfoData={InfoData}
      />
      <ProcessSection leftCalc={scrollWidth} ProcessData={ProcessData} />
      <TestimonySection TestimonyData={Testimonies} />
      <SupportSection />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Home;
