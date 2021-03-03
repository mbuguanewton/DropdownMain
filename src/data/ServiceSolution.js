import FoodT from "../assets/Images/Background/FoodTech.png";
import Edtech from "../assets/Images/Background/EdTech.png";
import HealthTech from "../assets/Images/Background/HealthTech.png";
import Hospitality from "../assets/Images/Background/HospitalityA.png";


import consultBusiness from "../assets/Images/Foreground/consultIcon.png";
import consultDiscover from "../assets/Images/Foreground/discoverIcon.png";
import consultAudit from "../assets/Images/Foreground/AuditIcon.png";


import productDesign from "../assets/Images/Foreground/productSprint.png";
import productUx from "../assets/Images/Foreground/productUx.png";
import productCopyWrite from "../assets/Images/Foreground/productCopywrite.png";
import productReview from "../assets/Images/Foreground/productReview.png";


import ImageReact from "../assets/Images/Foreground/react.svg";
import ImageNode from "../assets/Images/Foreground/nodejs.svg";
import ImageVue from "../assets/Images/Foreground/vue.svg";
import ImageJam from "../assets/Images/Foreground/jamstack.svg";
import ImageSaas from "../assets/Images/Foreground/SaaS.svg";
import ImagePWA from "../assets/Images/Foreground/PWA.svg";


import PWADiscovery from "../assets/Images/Foreground/PWAdiscovery.svg";
import PWAProof from "../assets/Images/Foreground/PWAProof.svg";
import PWADev from "../assets/Images/Foreground/PWADev.svg";


export const SolutionData = [
  {
    name: "Food Tech",
    backg: FoodT,
  },
  {
    name: "EdTech",
    backg: Edtech,
  },
  {
    name: "Health Tech",
    backg: HealthTech,
  },
  {
    name: "Hospitality",
    backg: Hospitality,
  },
  {
    name: "",
    backg: "",
  },
];

export const TabsData = [
  {
    ServiceType: "Consulting",
  },
  {
    ServiceType: "Product Design",
  },
  {
    ServiceType: "Web Development",
  },
  {
    ServiceType: "PWA Development",
  },
  {
    ServiceType: "Mobile Development",
  },
  
];

export const ServicesDetailData = [
  {
    Title: "Consulting",
    Type: "Full",
    dropShadow: true,
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/image-min_UxVGio_bIJ.png",
    mainText: `We provide you with expert opinion on different aspects of the software development process, Web development, Mobile development and much more.`,
    subText: `“We are here to help you start & grow.”`,
    serviceDetailTitle: "Consulting services include",
    serviceType: "fill",
    color: "#ffffff",
    serviceDetail: [
      {
        Image: consultBusiness,
        text: "Business Concept Development",
      },
      {
        Image: consultDiscover,
        text: "Discovery session",
      },
      {
        Image: consultAudit,
        text: "Audits",
      },
    ],
  },

  {
    Title: "Product Design",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_281_Lz960jH2W.png",
    mainText:
      "We start from understanding your business’ and users’ needs, then we draw up a strategic plan for prototyping and development. When the product is tested, we show it to the world and wait for the feedback. ",
    subText: `“Digital product creation is a process, we implement double diamond methodology: discover, define, develop, deliver.”`,
    serviceDetailTitle: "Product design services include",
    serviceType: "fill",
    color: "rgba(255, 222, 178, 0.3)",
    serviceDetail: [
      {
        Image: productDesign,
        text: "Design sprint",
      },
      {
        Image: productUx,
        text: "UX/UI design",
      },
      {
        Image: productCopyWrite,
        text: "Copywriting",
      },
      {
        Image: productReview,
        text: "UX review",
      },
    ],
  },
  {
    Title: "Web Development",
    Type: "Full",
    dropShadow: true,
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_277-min_E_ZouFfSNF.png",
    mainText:
      "We have developed dozens of web applications, such as an online platform for the learning, a multivendor ERP platform and many more.",
    subText: `“Custom web development
is one of our essential
specialties”`,
    serviceDetailTitle: "Web development services include",
    serviceType: "empty",
    color: "#ffffff",
    serviceDetail: [
      {
        Image: ImageReact,
        text: "React.js development",
      },
      {
        Image: ImageVue,
        text: "Vue.js development",
      },
      {
        Image: ImageNode,
        text: "Node.js development",
      },
      {
        Image: ImageJam,
        text: "JAMstack development",
      },
      {
        Image: ImageSaas,
        text: "SaaS development",
      },
      {
        Image: ImagePWA,
        text: "Progressive Web App",
      },
    ],
  },

  {
    Title: "PWA Development",
    Type: "Half",
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_281-1_74oHA5v1T.png",
    mainText:
      "Smartphone penetration has propelled the digital economy across Kenya through hosting e-commerce, social networks and mobility applications. Hence, the need for a mobile-first approach is an absolute necessity. This is why we offer PWA development, which allow for creating fast, reliable, and engaging web pages and mobile apps in one bundle.",
    subText: `“Majority of web traffic in leading digital markets in Africa originated from mobile devices in March 2019.”`,
    serviceDetailTitle: "PWA development services include",
    serviceType: "fill",
    color: "rgba(255, 222, 178, 0.3)",
    serviceDetail: [
      {
        Image: PWADiscovery,
        text: "Discovery session",
      },
      {
        Image: PWAProof,
        text: "Proof of concept",
      },
      {
        Image: PWADev,
        text: "PWA Development",
      },
      {
        Image: productReview,
        text: "UX review",
      },
    ],
  },

  {
    Title: "Mobile Development",
    Type: "Full",
    dropShadow: true,
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_278_MGi-Ls30M.png",
    mainText:
      "Our team has created mobile applications for online health insurance. The app allows insursnce holders manage clinic appointments, medicine and health records.",
    subText: `“Custom mobile development specialties”`,
    serviceDetailTitle: "Mobile development services include",
    serviceType: "empty",
    color: "#ffffff",
    serviceDetail: [
      {
        Image: ImageReact,
        text: "React Native development",
      },

      {
        Image: ImageNode,
        text: "Node.js development",
      },
    ],
  },
  {
    Title: "Ecommerce",
    Type: "Half",
    dropShadow: true,
    mainImage:
      "https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Rectangle_281-1_74oHA5v1T.png",
    mainText:
      "Kenya has one of the most vibrant e-commerce ecosystems in Africa and has shown steady growth. Expers predict the Kenyan e-commerce market is expected to reach an market volume of USD 2 billion by 2024 (Statista).This is also said the COVID-19 lockdown period pushed more businesses to open up online shops and e-commerce in Kenya. ",
    subText: `“Expers predict the Kenyan e-commerce market is expected to reach an market volume of USD 2 billion by 2024 (Statista).”`,
    serviceDetail: [],
    color: "#ffffff",
  },
];
