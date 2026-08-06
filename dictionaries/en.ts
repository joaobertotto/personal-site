import type { Dictionary } from "@/lib/i18n/types"

const en: Dictionary = {
  meta: {
    title: "João Bertotto",
    description:
      "Front-end engineer building production web applications with React, TypeScript, and Next.js.",
  },
  ui: {
    experience: "Experience",
    contact: "Contact",
    work: "Work",
    siteInfo: "Site information",
    projectGallery: "Project gallery",
    language: "Language",
    project: "Project",
  },
  intro: {
    name: "João Bertotto",
    role: "Software Engineer",
    bio: "Software engineer with 5 years building production web applications in React, TypeScript, and Next.js. Currently the sole developer on a U.S. e-commerce product, owning the storefront end to end — from the customer-facing UI through to the systems that move orders into fulfillment. Four years of fully remote, async work with U.S.-based teams.",
    location: "Porto Alegre, Brazil (UTC−3) · Remote",
    avatarAlt: "Portrait of João Bertotto",
  },
  about: {
    heading: "Between product and systems",
    body: "I build production storefronts and the systems around them — React, TypeScript, and Next.js on the frontend, with Shopify, Node services, and Three.js when the product needs more than a page.",
  },
  experience: [
    {
      position: "CTO & Sole Developer",
      company: "Legion Sabers",
      dates: "Jun 2023 – Present",
      location: "Portland, OR (Fully remote)",
      description:
        "Own the React and TypeScript frontend end to end for a 10-person DTC e-commerce business. Rebuilt the Shopify storefront, shipped a Three.js product configurator, and built fulfillment automation that syncs the U.S. team, warehouse, and China manufacturing partner.",
    },
    {
      position: "Web Developer & 3D Modeling Specialist",
      company: "Stand It Up",
      dates: "Aug 2022 – May 2023",
      location: "Memphis, TN (Fully remote)",
      description:
        "Built the company website from scratch and designed the product catalog UI across desktop and mobile. Produced 300+ production-ready 3D models and set CAD conventions for consistent output at scale.",
    },
    {
      position: "Developer",
      company: "Connect Smart Data",
      dates: "Aug 2021 – Aug 2022",
      location: "Porto Alegre, Brazil",
      description:
        "Built internal dashboards and client-facing tools with React and Node.js. Implemented analytics instrumentation, backend automation, and shipped updates to the company’s iOS and Android applications.",
    },
  ],
}

export default en
