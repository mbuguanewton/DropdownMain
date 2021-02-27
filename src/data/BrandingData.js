import PWADiscovery from "../assets/Images/Foreground/PWAdiscovery.svg";
import PWADev from "../assets/Images/Foreground/PWADev.svg";
import productUx from "../assets/Images/Foreground/productUx.png";
import productDesign from "../assets/Images/Foreground/productSprint.png";

export const BrandingServices = [
  {
    ServiceType: "Brand stravtegy",
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
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_278-min_Qz0EUzZRQ.png",
    mainText: `Strategy is both functional and inspirational. It lays the foundation for boosting customer loyalty and building brand equity.  Our strategy services help you build a foundation for the future of your brand by defining a positioning platform that drives relevance.`,
    subText: "",
    serviceDetailTitle: "Brand strategy services include",
    serviceType: "fill",
    color: "rgba(255, 222, 178, 0.3)",
    serviceDetail: [
      {
        Image: PWADiscovery,
        text: "Brand Positioning",
      },
      {
        Image: productDesign,
        text: "Brand Architecture & Naming",
      },
      {
        Image: productUx,
        text: "Brand Story",
      },
      {
        Image: PWADev,
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
    serviceDetailTitle: "Brand experience services include",
    serviceType: "fill",
    color: "#ffffff",
    serviceDetail: [
      {
        Image: PWADiscovery,
        text: "Visual Identity",
      },
      {
        Image: productDesign,
        text: "Websites & Mobile",
      },
      {
        Image: productUx,
        text: "Graphic Design",
      },
      {
        Image: PWADev,
        text: "Marketing Collateral",
      },
    ],
  },

  {
    Title: "Brand Launch",
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
