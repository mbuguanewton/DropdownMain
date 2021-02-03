import learnhub_Image from '../assets/Images/learnhub.png';
import learnhub_bg from '../assets/Images/Background/learnhub.png';

import sweettooth_Image from '../assets/Images/SweetTooth.png';
import sweettooth_bg from '../assets/Images/Background/sweetTooth.png';

import visualbrand_Image from '../assets/Images/VisualImage.png';
import visualbrand_bg from '../assets/Images/Background/VisualBrand.png';
export const ServicesData = [
  {
    id: 1,
    title: "Need a Website or Mobile Application?",
    background: learnhub_bg,
    Image: learnhub_Image,
    type: "screen",
    text:
      "We are ready to help. No matter if you plan to build a website or mobile application from scratch... or need to scale your team. Whenever you want and always when you want, we are at your service.",
    services: [
      {
        serviceOffer: "We work with all industries",
      },
      {
        serviceOffer: "Custom solution",
      },
      {
        serviceOffer: "Professional SEO",
      },
      {
        serviceOffer: "Professional domains",
      },
    ],
    buttonText: "Learn more...",
  },
  {
    id: 2,
    title: "Want To Sell online?",
    background: sweettooth_bg,
    Image: sweettooth_Image,
    type: "mobile",
    text:
      "You don’t need a physical store to sell your products. It’s easy to set up an store online. We design the UX/UI of your e-commerce store and support your businesses in integrating with existing ERP.",
    services: [
      {
        serviceOffer: "No transaction fees",
      },
      {
        serviceOffer: "Beautiful shopfront website",
      },
      {
        serviceOffer: "Flexible CMS",
      },
      {
        serviceOffer: "Convenient payment methods",
      },
    ],
    buttonText: "Learn more...",
  },
  {
    id: 3,
    title: "Need a Visual Brand?",
    background: visualbrand_bg,
    Image: visualbrand_Image,
    type: "screen",
    text:
      "Need a professional logo for your company— We design Logos and help busineses build a recognisable digital brand.",
    services: [
      {
        serviceOffer: "Customized for you",
      },
      {
        serviceOffer: "Professional design",
      },
      {
        serviceOffer: "Available online and in print",
      },
    ],
    buttonText: "Learn more...",
  },
];
