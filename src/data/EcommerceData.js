import PWADiscovery from "../assets/Images/Foreground/PWAdiscovery.svg";
import PWADev from "../assets/Images/Foreground/PWADev.svg";
import productUx from "../assets/Images/Foreground/productUx.png";
import productDesign from "../assets/Images/Foreground/productSprint.png";

export const EcommerceServices = [
  {
    ServiceType: "Custom E-Commerce/POS",
  },
  {
    ServiceType: "PWA Webstore Development",
  },
];

export const EcommerceData = [
  {
    Title: "Custom E-Commerce/POS",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_278-min_Qz0EUzZRQ.png",
    mainText: `We create web stores on the basis of an in-depth understanding of your business objectives and the needs of your users. We will deliver a functional and delightful e-commerce websites that users enjoy.`,
    subText: `“We offer custom e-commerce development solutions that maximize conversions and decrease churn rate, providing web visibility for your good or service.”`,
    serviceDetailTitle: "Custom e-commerce development services include",
    serviceType: "fill",
    displayfalse: true,
    color: "#FFF5E8",
    serviceDetail: [
      {
        Image: PWADiscovery,
        text: "Discovery session",
      },
      {
        Image: productDesign,
        text: "Design sprint",
      },
      {
        Image: productUx,
        text: "UX/UI design",
      },
      {
        Image: PWADev,
        text: "Development",
      },
    ],

    BottomButton: true,
    BottomButtonHead: "Ready to Build an e-commerce website?",
    BottomButtonText: "start now",
  },

  {
    Title: "PWA Web Store Development",
    Type: "Full",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/DC221211-5961-456D-A43E-C924ADD6F50C_1-min_njmx_mV-6h.png",
    mainText: `Google-designed Progressive Web Applications are a series of APIs that enable the development of fast, reliable and engaging digital products with the essential features of both web pages and mobile apps. This involves offline access, push alerts, shortcuts to the home screen and functionality via a standard mobile browser.`,
    subText: `“PWA will boost the speed of your page in your store. They scale easily and give your users both mobile and offline access to your store,”`,
    serviceDetailTitle: "",
    serviceType: "fill",
    color: "#ffffff",
    ImageClass: "office",
    dropShadow: true,
    serviceDetail: [],

    BottomButton: false,
    BottomButtonHead: "",
    BottomButtonText: "",
  },
];
