import React from "react";

export const Pages = {
    "featured": {
      title: "Featured",
      description: `We consider all brand communications as a totality and apply a holistic approach to our work.`,
      url: "all"
    },
    "brand identity": {
      title: "Brand Identity",
      description: `Our brand identity work includes visual identity systems, logomarks, color palettes, typography, icon development, graphic elements and brand guidelines.`,
      url: "brand"
    },
    "digital experiences": {
      title: "Digital Experiences",
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