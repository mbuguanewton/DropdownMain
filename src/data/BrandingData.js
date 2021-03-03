import PWADiscovery from "../assets/Images/Foreground/PWAdiscovery.svg";
import PWADev from "../assets/Images/Foreground/PWADev.svg";
import productUx from "../assets/Images/Foreground/productUx.png";
import productDesign from "../assets/Images/Foreground/productSprint.png";

import BrandPosition from '../assets/Images/Foreground/BrandPosition.svg';
import BrandArch from '../assets/Images/Foreground/brandArch.svg';
import BrandStory from '../assets/Images/Foreground/BrandStory.svg';
import BrandUx from '../assets/Images/Foreground/UXStrategy.svg';

import GraphicDesign from '../assets/Images/Foreground/GraphicDesign.svg';

export const BrandingServices = [
  {
    ServiceType: "Brand strategy",
  },
  {
    ServiceType: "Brand Experience",
  },
  {
    ServiceType: "Brand Launch & Activation",
  },
];

export const BrandingData = [
  {
    Title: "Brand Strategy",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/laptop-min_n0Xx1LmU1.svg",
    mainText: `Strategy is both functional and inspirational. It lays the foundation for boosting customer loyalty and building brand equity.  Our strategy services help you build a foundation for the future of your brand by defining a positioning platform that drives relevance.`,
    subText: "",
    changeSize: true,
    serviceDetailTitle: "Brand strategy services include",
    serviceType: "fill",

    color: "rgba(255, 222, 178, 0.3)",
    serviceDetail: [
      {
        Image: BrandPosition,
        text: "Brand Positioning",
      },
      {
        Image: BrandArch,
        text: "Brand Architecture & Naming",
      },
      {
        Image: BrandStory,
        text: "Brand Story",
      },
      {
        Image: BrandUx,
        text: "UX Strategy",
      },
    ],

    BottomButton: true,
    BottomButtonHead: "Need to rebrand your business?",
    BottomButtonText: "start now",
  },

  {
    Title: "Brand Experience",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/SweetCakes_i6dvofvy_.svg",
    mainText: `Strong brands have distinct personalities that are instantly recognizable in every brand experience. Using data-driven strategies, we will build a visual identity that will connect with audiences in meaningful ways, and boost brand awareness and customer loyalty.`,
    subText: "",
    changeSize: true,
    serviceDetailTitle: "Brand experience services include",
    serviceType: "fill",
    dropShadow: true,
    color: "#ffffff",
    serviceDetail: [
      {
        Image: productDesign,
        text: "Visual Identity",
        detailBtn: true,
        BtnLink: "/visual",
      },
      {
        Image: productUx,
        text: "Websites & Mobile",
        detailBtn: true,
        BtnLink: "/services",
      },
      {
        Image: GraphicDesign,
        text: "Graphic Design",
      },
      {
        Image: PWADev,
        text: "Marketing Collateral",
      },
    ],
  },

  {
    Title: "Brand Launch & Activation",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Mobile/Rectangle_280_YZNpacVWm.png",
    mainText: `Our launch services help ensure that your brand remains prepared for growth far beyond its initial launch. They help you stay relevant in a fast-paced and evoulving market.  We also aligning your team around culture and positioning.

`,
    subText: "",
    serviceDetailTitle: "Brand launch services include",
    serviceType: "fill",
    color: "rgba(255, 222, 178, 0.3)",
    serviceDetail: [
      {
        Image: PWADiscovery,
        text: "Brand Launch",
      },
      {
        Image: productDesign,
        text: "Brand Implementation",
      },
      {
        Image: productUx,
        text: " Campaign Development",
      },
    ],
  },
];
