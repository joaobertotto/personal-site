import type { Dictionary } from "@/content/types"

const en: Dictionary = {
  meta: {
    home: {
      title: "João Bertotto",
      description:
        "Front-end engineer building production web applications with React, TypeScript, and Next.js.",
    },
    portfolio: {
      title: "Portfolio · João Bertotto",
      description:
        "Selected work — storefronts, product tools, and experiments built with React, TypeScript, and Next.js.",
    },
  },
  ui: {
    experience: "Experience",
    contact: "Contact",
    work: "Work",
    maker: "Maker",
    fun: "Fun",
    siteInfo: "Site information",
    projectGallery: "Project gallery",
    language: "Language",
    project: "Project",
    visitProject: "Visit project",
    weather: {
      label: "Weather",
      loading: "Loading weather…",
      error: "Weather unavailable",
      place: "Porto Alegre",
      conditions: {
        clear: "Clear",
        partlyCloudy: "Partly cloudy",
        fog: "Fog",
        drizzle: "Drizzle",
        rain: "Rain",
        snow: "Snow",
        showers: "Showers",
        thunderstorm: "Thunderstorm",
        mixed: "Mixed",
      },
    },
    map: {
      label: "Map",
      place: "Porto Alegre, Brazil",
      alt: "Map of Porto Alegre, Brazil",
    },
    status: {
      label: "Status",
      available: "Available",
      around: "Around",
      offline: "Offline",
    },
    localTime: {
      label: "Local time",
      timezone: "Porto Alegre · UTC−3",
    },
    coffee: {
      label: "Coffee",
      unit: "cups today",
      add: "Add a coffee",
    },
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      label: "Primary",
    },
  },
  intro: {
    name: "João Bertotto",
    role: "Software Engineer",
    bio: "Software engineer with 5 years building production web applications in React, TypeScript, and Next.js. Currently the sole developer on a U.S. e-commerce product, owning the storefront end to end — from the customer-facing UI through to the systems that move orders into fulfillment. Four years of fully remote, async work with U.S.-based teams.",
    portfolioBio:
      "I'm João, a software engineer based in Porto Alegre, working in design and code.",
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
  work: [
    {
      id: "legion-sabers",
      title: "Legion Sabers",
      description:
        "End-to-end ownership of a DTC e-commerce storefront for custom lightsabers — React and TypeScript on Shopify, from product discovery through checkout.",
      href: "https://legionsabers.com",
      images: [
        {
          alt: "Legion Sabers storefront home page",
          caption: "Storefront",
          span: "md:col-span-2",
        },
        {
          alt: "Product detail page for a custom saber",
          caption: "Product page",
        },
        {
          alt: "Mobile storefront layout",
          caption: "Mobile",
        },
        {
          alt: "Collection browsing experience",
          caption: "Collections",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "fulfillment",
      title: "Fulfillment automation",
      description:
        "Internal tooling that syncs the U.S. team, warehouse, and China manufacturing partner — so orders leave the storefront and land where they need to be without spreadsheet gymnastics.",
      images: [
        {
          alt: "Order sync dashboard overview",
          caption: "Orders dashboard",
          span: "md:col-span-2",
        },
        {
          alt: "Warehouse status view",
          caption: "Warehouse",
        },
        {
          alt: "Manufacturing handoff flow",
          caption: "Manufacturing",
        },
      ],
    },
    {
      id: "stand-it-up",
      title: "Stand It Up",
      description:
        "Company website and product catalog built from scratch — desktop and mobile UI, plus a CAD pipeline that produced 300+ production-ready 3D models.",
      images: [
        {
          alt: "Stand It Up marketing home page",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          alt: "Product catalog grid",
          caption: "Catalog",
        },
        {
          alt: "Mobile catalog browsing",
          caption: "Mobile catalog",
        },
        {
          alt: "3D product model examples",
          caption: "3D models",
          span: "md:col-span-2",
        },
      ],
    },
  ],
  maker: [
    {
      id: "configurator",
      title: "Product configurator",
      description:
        "A Three.js configurator that lets customers build a custom saber in the browser — live 3D preview, option constraints, and a path straight into the cart.",
      images: [
        {
          alt: "3D saber configurator desktop view",
          caption: "Desktop builder",
          span: "md:col-span-2 md:row-span-2",
        },
        {
          alt: "Part selection panel in the configurator",
          caption: "Parts panel",
        },
        {
          alt: "Mobile configurator experience",
          caption: "Mobile",
        },
        {
          alt: "Configured saber ready to add to cart",
          caption: "Ready to cart",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "cad-pipeline",
      title: "CAD conventions",
      description:
        "Modeling standards and naming conventions so a large library of product assets stays consistent — the unglamorous systems work that makes 3D usable at scale.",
      images: [
        {
          alt: "CAD naming and layer conventions diagram",
          caption: "Conventions",
          span: "md:col-span-2",
        },
        {
          alt: "Batch of production-ready 3D assets",
          caption: "Asset batch",
        },
      ],
    },
  ],
  fun: [
    {
      id: "personal-site",
      title: "This site",
      description:
        "A bilingual personal site in Next.js — Accept-Language routing, en / pt-BR dictionaries, and a two-column layout that stays readable on both desktop and phone.",
      images: [
        {
          alt: "Personal site about column",
          caption: "About",
        },
        {
          alt: "Personal site project gallery",
          caption: "Gallery",
        },
        {
          alt: "Language switcher between English and Portuguese",
          caption: "i18n",
          span: "md:col-span-2",
        },
      ],
    },
  ],
  mosaic: {
    work: [
      {
        id: "tile-legion-sabers",
        kind: "project",
        projectId: "legion-sabers",
        span: "col-span-2 row-span-2",
      },
      {
        id: "tile-fulfillment",
        kind: "project",
        projectId: "fulfillment",
        span: "col-span-1 row-span-1 md:col-span-2",
      },
      {
        id: "tile-stand-it-up",
        kind: "project",
        projectId: "stand-it-up",
        span: "col-span-1 row-span-1 md:col-span-2",
      },
    ],
    maker: [
      {
        id: "tile-configurator",
        kind: "project",
        projectId: "configurator",
        span: "col-span-2 row-span-2",
      },
      {
        id: "tile-cad-pipeline",
        kind: "project",
        projectId: "cad-pipeline",
        span: "col-span-2",
      },
    ],
    fun: [
      {
        id: "tile-status",
        kind: "status",
        span: "col-span-1",
      },
      {
        id: "tile-local-time",
        kind: "localTime",
        span: "col-span-1",
      },
      {
        id: "tile-coffee",
        kind: "coffee",
        span: "col-span-1",
      },
      {
        id: "tile-weather",
        kind: "weather",
        span: "col-span-1",
      },
      {
        id: "tile-map",
        kind: "map",
        span: "col-span-2 row-span-2",
      },
      {
        id: "tile-personal-site",
        kind: "project",
        projectId: "personal-site",
        span: "col-span-2",
      },
    ],
  },
}

export default en
