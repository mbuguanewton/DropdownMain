import React, { useState } from "react";
import {
  MobileMenu,
  Navigation,
  FooterSection,
  
} from "../components/common";
import { ContactHeroSection, ContactSection } from "../components/Contact";
import { ContactData } from "../data/ContactData";
import { FooterServices } from "../data/footerData";

const Contact = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggle = () => {
    setMobileMenu(!openMobileMenu);
  };

  //check the submission of the Forms
  const submitForm = ()=>{
    setSubmitSuccess(true);
  }
  return (
    <>
      <MobileMenu mobileActive={openMobileMenu} toggle={toggle} />
      <Navigation
        menuColor="#FEF0D4"
        toggle={toggle}
        mobileActive={openMobileMenu}
      />
      <ContactHeroSection />
      <ContactSection ContactData={ContactData} submitForm={submitForm} />

      <FooterSection FServices={FooterServices} />
    </>
  );
};

export default Contact;
