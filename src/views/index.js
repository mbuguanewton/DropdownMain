import React, { useState } from "react";
import HeroSection from "../components/Index/HeroSection";
import RecentWork from "../components/Index/RecentWorks";
import ServicesSection from "../components/Index/ServicesSection";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import {WorkData} from '../data/RecentWorkData';
import {ServicesData} from '../data/ServicesData';
const Home = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation toggle={toggle} mobileActive={openMobileMenu} />
      <HeroSection/>
      <RecentWork recentData={WorkData}/>
      <ServicesSection serviceData={ServicesData}/>
    </>
  );
};

export default Home;
