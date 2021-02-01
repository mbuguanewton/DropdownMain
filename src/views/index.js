import React, { useState } from "react";
import HeroSection from "../components/Index/HeroSection";
import MobileMenu from "../components/MobileMenu";
import Navigation from "../components/Navigation";

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
    </>
  );
};

export default Home;
