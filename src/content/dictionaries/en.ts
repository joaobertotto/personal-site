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
    contact: {
      title: "Contact · João Bertotto",
      description:
        "Get in touch about front-end roles, freelance work, or anything you saw on the site.",
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
    cv: "Download CV",
    project: "Project",
    visitProject: "Visit project",
    inProgress: {
      label: "In progress",
    },
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
    r2d2: {
      label: "Droid",
      title: "R2-D2",
      hint: "Tap to wake him up",
      loading: "Spinning up the droid…",
      unavailable: "Droid offline",
      action: "Poke R2-D2",
    },
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      contact: "Contact",
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
  contactPage: {
    heading: "Let's talk",
    body: "I'm open to front-end and full-stack roles, and to freelance work on storefronts, product tools, and 3D configurators. Anything you saw on this site is fair game too.",
    availability: {
      label: "Right now",
      replyTime: "I usually reply within a day.",
    },
    links: {
      label: "Elsewhere",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    form: {
      heading: "Send a message",
      subject: "Subject",
      subjectPlaceholder: "Front-end role at …",
      message: "Message",
      messagePlaceholder: "A little about the role, the project, or the idea.",
      send: "Open in email app",
      hint: "This opens your email app with the message ready to send — nothing is submitted to this site.",
    },
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
        "Sole front-end owner of a direct-to-consumer lightsaber storefront — product architecture, collection browsing, and checkout on Shopify. Carries a catalog that runs from entry-level sabers to screen-accurate replicas, plus the online face of Docking Bay 45, the brand's 3,000 sq ft retail space in Portland.",
      href: "https://legionsabers.com",
      images: [
        {
          src: "/work/legion-sabers/storefront.png",
          alt: "Legion Sabers storefront home page",
          caption: "Storefront",
          span: "md:col-span-2",
        },
        {
          src: "/work/legion-sabers/product.png",
          alt: "Product detail page for a custom saber",
          caption: "Product page",
        },
        {
          src: "/work/legion-sabers/mobile.png",
          alt: "Mobile storefront layout",
          caption: "Mobile",
        },
        {
          src: "/work/legion-sabers/collections.png",
          alt: "Collection browsing experience",
          caption: "Collections",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "wotan-brindes",
      title: "Wotan Brindes",
      description:
        "Corporate gifting and branded merchandise site for a Brazilian client, built end to end at Pegasus Digital Services — the studio I co-founded. Catalog and product pages feed a WhatsApp-first enquiry flow, because that is how the business actually closes deals.",
      href: "https://wotanbrindes.com.br",
      images: [
        {
          src: "/work/wotan-brindes/home.png",
          alt: "Wotan Brindes home page",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          src: "/work/wotan-brindes/catalog.png",
          alt: "Product catalog browsing",
          caption: "Catalog",
        },
        {
          src: "/work/wotan-brindes/product.png",
          alt: "Product detail page",
          caption: "Product page",
        },
        {
          src: "/work/wotan-brindes/mobile.png",
          alt: "Mobile layout of the Wotan Brindes site",
          caption: "Mobile",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "fulfillment",
      title: "Fulfillment automation",
      description:
        "Internal tooling that puts the U.S. team, the warehouse, and a manufacturing partner in China on one source of truth. Replaced a spreadsheet handoff — orders now leave the storefront and reach the right facility without anyone re-keying them.",
      images: [
        {
          src: "/work/fulfillment/orders.png",
          alt: "Order sync dashboard overview",
          caption: "Orders dashboard",
          span: "md:col-span-2",
        },
        {
          src: "/work/fulfillment/warehouse.png",
          alt: "Warehouse status view",
          caption: "Warehouse",
        },
        {
          src: "/work/fulfillment/manufacturing.png",
          alt: "Manufacturing handoff flow",
          caption: "Manufacturing",
        },
      ],
    },
    {
      id: "stand-it-up",
      title: "Stand It Up",
      description:
        "Company site and product catalog built from nothing — marketing pages, catalog UI, and a CAD pipeline that turned raw product data into 300+ production-ready 3D models without hand-modelling each one.",
      images: [
        {
          src: "/work/stand-it-up/home.png",
          alt: "Stand It Up marketing home page",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          src: "/work/stand-it-up/catalog.png",
          alt: "Product catalog grid",
          caption: "Catalog",
        },
        {
          src: "/work/stand-it-up/mobile.png",
          alt: "Mobile catalog browsing",
          caption: "Mobile catalog",
        },
        {
          src: "/work/stand-it-up/models.png",
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
    // Layout is the intended mosaic — restore each placeholder with
    // `kind: "project"` and the `projectId` noted below. Screenshots are not
    // ready yet; placeholders keep the grid from collapsing on launch.
    //
    // Legion Sabers (2x2) anchors the band; Wotan and Fulfillment stack
    // beside it as full-width strips. Fills a 4x2 grid exactly on md+, 2x4
    // on mobile. Stand It Up stays off the home page on purpose.
    work: [
      {
        id: "tile-legion-sabers", // projectId: "legion-sabers"
        kind: "inProgress",
        span: "col-span-2 row-span-2",
      },
      {
        id: "tile-wotan-brindes", // projectId: "wotan-brindes"
        kind: "inProgress",
        span: "col-span-2",
      },
      {
        id: "tile-fulfillment", // projectId: "fulfillment"
        kind: "inProgress",
        span: "col-span-2",
      },
    ],
    // Configurator (2x2) + two portraits: the droid stays live; CAD is a
    // placeholder until its shots land. Fills a 4x2 grid exactly on md+,
    // and stacks into a 2x4 grid on mobile.
    maker: [
      {
        id: "tile-configurator", // projectId: "configurator"
        kind: "inProgress",
        span: "col-span-2 row-span-2",
      },
      {
        id: "tile-r2d2",
        kind: "r2d2",
        span: "col-span-1 row-span-2",
      },
      {
        id: "tile-cad-pipeline", // projectId: "cad-pipeline"
        kind: "inProgress",
        span: "col-span-1 row-span-2",
      },
    ],
    // Anchor + cluster: map is a 2x2 anchor, the four widgets form a 2x2
    // cluster beside it, and the project closes the band full width.
    // Fills a 4x3 grid exactly on md+, and a 2x5 grid exactly on mobile.
    fun: [
      {
        id: "tile-map",
        kind: "map",
        span: "col-span-2 row-span-2",
      },
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
    ],
  },
}

export default en
