import React, { useState, useEffect } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  Lists,
} from "../components/common";
import {
  ServiceHeroSection,
  ServiceSolution,
  
} from "../components/ServicesPage";
import { FooterServices } from "../data/footerData";
import {
  SolutionData,
  TabsData,
  ServicesDetailData,
} from "../data/ServiceSolution";
const Services = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    let totalWidth = window.screen.width;
    setScreenWidth(totalWidth);
  }, []);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  const changeScreenWidth = () => {
    let totalScreenWidth = window.screen.width;
    setScreenWidth(totalScreenWidth);
  };

  window.addEventListener("resize", changeScreenWidth);
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation
        menuColor="#FDE1A9"
        toggle={toggle}
        mobileActive={openMobileMenu}
      />
      <ServiceHeroSection ScreenWidth={screenWidth} />
      <ServiceSolution SolutionData={SolutionData} />
      <Lists
        TabStyle="services"
        TabsData={TabsData}
        serviceData={ServicesDetailData}
      />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Services;
