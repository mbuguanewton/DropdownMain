import React, { useEffect, useState } from 'react'
import { MobileMenu, Navigation, FooterSection, HeroWork, SupportSection } from "../components/common";
import WorkSection from '../components/ProjectWork/WorkSection';
import { FooterServices } from "../data/footerData";
import {WorkTitle, ClientWork, OurProjects} from '../data/WorkData';
const Work = () => {
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
        <Navigation
          menuColor="#FDE1A9"
          toggle={toggle}
          mobileActive={openMobileMenu}
        />
        <HeroWork details={WorkTitle} widthCheck={scrollWidth} />
        <WorkSection ClientWork={ClientWork} OurProjects={OurProjects} />
        <SupportSection />
        <FooterSection FServices={FooterServices} />
      </>
    );
}

export default Work;
