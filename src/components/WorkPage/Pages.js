import React from "react";

export const Pages = {
    "all": {
      title: "All",
      description: `We create work that builds business value and enhances life for people and the places they inhabit.`,
      url: "all"
  
    },
    "brand identity": {
      title: "Brand Identity",
      description: `Our brand identity work includes visual identity systems, logomarks, color palettes, typography, icon development, graphic elements and brand guidelines.`,
      url: "brand"
    },
    "digital design": {
      title: "Digital Design",
      description: `Our digital work includes websites, product microsites, email newsletters, online advertising, social media, content management systems and analytics.`,
      url: "digital"
    },
    "environmental graphics": {
      title: "Environmental Graphics",
      description: `Our signage work encompasses projects from city transportation and park systems, building and retail signage, workplace and feature wall graphics, donor and digital signage.`,
      url: "signage"
    }
  }

export const WorkContext = React.createContext({
    filter: Pages["all"],
    setFilter: (filter) => {}
});