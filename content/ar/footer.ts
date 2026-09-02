import { Facebook, Smartphone } from 'lucide-react';

export const footer = {
    tagline: "بنبني ديجيتال صح.",
    subscribe: {
      title: "النشرة البرمجية",
      placeholder: "اكتب إيميلك",
      button: "اشترك"
    },
    columns: {
      solutions: {
        title: "حلولنا",
        items: ["Web Architecture", "Mobile Dev", "AI & ML", "Cloud Ops", "App Security"]
      },
      company: {
        title: "الشركة",
        items: ["من نحن", "شغل معانا", "شركاءنا", "تواصل معنا"]
      },
      legal: {
        title: "روتين",
        items: [
          { label: "الخصوصية", path: "/legal/privacy-policy" },
          { label: "الشروط", path: "/legal/terms-of-service" },
          { label: "الكوكيز", path: "/legal/cookie-policy" },
          { label: "SLA", path: "/legal/sla" }
        ]
      }
    },
    rights: "© 2024 الصقر للبرمجيات. كل الحقوق محفوظة.",
    social: [
      { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/people/Elsakr/61584979738922/" },
      { name: "WhatsApp", icon: Smartphone, link: "https://wa.me/201016495229" } // Icon will be swapped in component if needed
    ]
  };
