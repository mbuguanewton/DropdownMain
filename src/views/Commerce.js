import React, { useEffect, useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  Lists,
} from "../components/common";
import { ServiceHeroSection  } from "../components/ServiceCommerce";
import { FooterServices } from "../data/footerData";
import {EcommerceServices, EcommerceData} from '../data/EcommerceData';
const Commerce = () => {
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
      <ServiceHeroSection widthCheck={scrollWidth} />
      <Lists TabsData={EcommerceServices} serviceData={EcommerceData} />
      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Commerce;
