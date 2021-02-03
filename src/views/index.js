import React, { useState } from "react";
import HeroSection from "../components/Index/HeroSection";
import RecentWork from "../components/Index/RecentWorks";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";
import {WorkData} from '../data/RecentWorkData';
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
    </>
  );
};

export default Home;
