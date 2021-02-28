import React, { useState } from 'react'
import { MobileMenu, Navigation, FooterSection, HeroWork, SupportSection } from "../components/common";
import WorkSection from '../components/ProjectWork/WorkSection';
import { FooterServices } from "../data/footerData";
import {WorkTitle, ClientWork, OurProjects} from '../data/WorkData';
const Work = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
   const toggle = () => {
     setMobileMenu(!openMobileMenu);
   };
    return (
      <>
        <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
        <Navigation toggle={toggle} mobileActive={openMobileMenu} />
        <HeroWork details={WorkTitle} />
        <WorkSection ClientWork={ClientWork} OurProjects={OurProjects} />
        <SupportSection/>
        <FooterSection FServices={FooterServices} />
      </>
    );
}

export default Work;
