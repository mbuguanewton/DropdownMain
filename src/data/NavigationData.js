import { RiArrowDownSLine } from "react-icons/ri";
import React from 'react';

export const NavData = [
  {
    title: "Services",
    path: "#",
    icon: <RiArrowDownSLine />,
    subNav: [
      {
        title: "one",
        path: "#",
      },
      {
        title: "Two",
        path: "#",
      },
    ],
  },

  {
    title: "Inspiration",
    path: "#",
    icon: <RiArrowDownSLine />,
    subNav: [
      {
        title: "one",
        path: "#",
      },
      {
        title: "Two",
        path: "#",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Resources",
    path: "/resources",
  },
];
