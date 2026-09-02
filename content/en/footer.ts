import { Facebook, Smartphone } from 'lucide-react';

export const footer = {
    tagline: "Building the Digital Future.",
    subscribe: {
      title: "Tech Newsletter",
      placeholder: "Enter email",
      button: "Subscribe"
    },
    columns: {
      solutions: {
        title: "Solutions",
        items: ["Web Architecture", "Mobile Dev", "AI & ML", "Cloud Ops", "App Security"]
      },
      company: {
        title: "Company",
        items: ["About Us", "Careers", "Partners", "Contact"]
      },
      legal: {
        title: "Legal",
        items: [
          { label: "Privacy", path: "/legal/privacy-policy" },
          { label: "Terms", path: "/legal/terms-of-service" },
          { label: "Cookies", path: "/legal/cookie-policy" },
          { label: "SLA", path: "/legal/sla" }
        ]
      }
    },
    rights: "© 2024 Elsakr. All rights reserved.",
    social: [
      { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/people/Elsakr/61584979738922/" },
      { name: "WhatsApp", icon: Smartphone, link: "https://wa.me/201016495229" } 
    ]
  };
