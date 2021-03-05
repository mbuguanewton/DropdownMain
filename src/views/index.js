/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import {
  MobileMenu,
  Navigation,

} from "../components/common";



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
      <Navigation
      displayfalse={true}
        menuColor="#FDE1A9"
        toggle={toggle}
        mobileActive={openMobileMenu}
      />
      
    </>
  );
};

export default Home;
