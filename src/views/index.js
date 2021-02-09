/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import HeroSection from "../components/Index/HeroSection";
import ProcessSection from "../components/Index/Process";
import RecentWork from "../components/Index/RecentWorks";
import ServicesSection from "../components/Index/ServicesSection";
import TechSection from "../components/Index/Technologies";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import {WorkData} from '../data/RecentWorkData';
import {ServicesData} from '../data/ServicesData';
import {ImageData, InfoData} from '../data/TechData';
import {ProcessData} from '../data/ProcessData';
import {Testimonies} from '../data/TestimoniesData';
import TestimonySection from "../components/Index/Testimonies";
const Home = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [scrollWidth, setScrollWidth] = useState();
  let scrolle;
  useEffect(()=>{
    scrolle = window.screen.width;
    let total = scrolle;
    console.log('this is scroll on x',window.screen.width, total);
    setScrollWidth(total);
  },[])
  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  const widthChange = () => {
    scrolle = window.screen.width;
    let total = scrolle;
    console.log("this is scroll on x", window.screen.width, total);
    setScrollWidth(total);
  }

  window.addEventListener('resize', widthChange);
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <HeroSection/>
      <RecentWork recentData={WorkData}/>
      <ServicesSection serviceData={ServicesData}/>
      <TechSection LogoData={ImageData} leftCalc={scrollWidth} InfoData={InfoData}/>
      <ProcessSection leftCalc={scrollWidth} ProcessData={ProcessData}/>
      <TestimonySection TestimonyData={Testimonies}/>
    </>
  );
};

export default Home;
