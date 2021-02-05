import React, { useState, useEffect } from "react";
import HeroSection from "../components/Index/HeroSection";
import RecentWork from "../components/Index/RecentWorks";
import ServicesSection from "../components/Index/ServicesSection";
import TechSection from "../components/Index/Technologies";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import {WorkData} from '../data/RecentWorkData';
import {ServicesData} from '../data/ServicesData';
import {ImageData} from '../data/TechData';
const Home = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState();
  let scrolle;
  useEffect(()=>{
    scrolle = window.screen.width;
    let total = scrolle * 0.1;
    console.log('this is scroll on x',window.screen.width, total);
    setScrollWidth(`${total}px`);
  },[])
  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  const widthChange = () => {
    scrolle = window.screen.width;
    let total = scrolle * 0.1;
    console.log("this is scroll on x", window.screen.width, total);
    setScrollWidth(`${total}px`);
  }

  window.addEventListener('resize', widthChange);
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <HeroSection/>
      <RecentWork recentData={WorkData}/>
      <ServicesSection serviceData={ServicesData}/>
      <TechSection LogoData={ImageData} leftCalc={scrollWidth}/>
    </>
  );
};

export default Home;
