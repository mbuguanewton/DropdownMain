import React, { useState } from "react";
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
    </>
  );
};

export default Home;
