import type { Dictionary } from "@/lib/i18n/types"

const ptBR: Dictionary = {
  meta: {
    home: {
      title: "João Bertotto",
      description:
        "Engenheiro front-end construindo aplicações web em produção com React, TypeScript e Next.js.",
    },
    portfolio: {
      title: "Portfólio · João Bertotto",
      description:
        "Trabalhos selecionados — storefronts, ferramentas de produto e experimentos com React, TypeScript e Next.js.",
    },
  },
  ui: {
    experience: "Experiência",
    contact: "Contato",
    work: "Trabalho",
    maker: "Maker",
    fun: "Diversão",
    siteInfo: "Informações do site",
    projectGallery: "Galeria de projetos",
    language: "Idioma",
    project: "Projeto",
    visitProject: "Visitar projeto",
    weather: {
      label: "Clima",
      loading: "Carregando clima…",
      error: "Clima indisponível",
      place: "Porto Alegre",
      conditions: {
        clear: "Limpo",
        partlyCloudy: "Parcialmente nublado",
        fog: "Neblina",
        drizzle: "Garoa",
        rain: "Chuva",
        snow: "Neve",
        showers: "Pancadas",
        thunderstorm: "Tempestade",
        mixed: "Variável",
      },
    },
    map: {
      label: "Mapa",
      place: "Porto Alegre, Brasil",
      alt: "Mapa de Porto Alegre, Brasil",
    },
    status: {
      label: "Status",
      available: "Disponível",
      around: "Por aí",
      offline: "Offline",
    },
    localTime: {
      label: "Hora local",
      timezone: "Porto Alegre · UTC−3",
    },
    coffee: {
      label: "Café",
      unit: "xícaras hoje",
      add: "Adicionar um café",
    },
    nav: {
      home: "Início",
      portfolio: "Portfólio",
      label: "Principal",
    },
  },
  intro: {
    name: "João Bertotto",
    role: "Engenheiro de Software",
    bio: "Engenheiro de software com 5 anos construindo aplicações web em produção com React, TypeScript e Next.js. Atualmente sou o único desenvolvedor de um produto de e-commerce nos EUA, responsável pelo storefront de ponta a ponta — da interface para o cliente até os sistemas que levam os pedidos à logística. Quatro anos de trabalho remoto e assíncrono com times baseados nos EUA.",
    portfolioBio:
      "Eu sou o João, engenheiro de software em Porto Alegre, trabalhando com design e código.",
    location: "Porto Alegre, Brasil (UTC−3) · Remoto",
    avatarAlt: "Retrato de João Bertotto",
  },
  about: {
    heading: "Entre produto e sistemas",
    body: "Eu construo storefronts em produção e os sistemas ao redor deles — React, TypeScript e Next.js no frontend, com Shopify, serviços Node e Three.js quando o produto precisa de mais do que uma página.",
  },
  experience: [
    {
      position: "CTO e Desenvolvedor Único",
      company: "Legion Sabers",
      dates: "jun 2023 – Atual",
      location: "Portland, OR (Totalmente remoto)",
      description:
        "Responsável pelo frontend em React e TypeScript de ponta a ponta em um e-commerce DTC de 10 pessoas. Reconstruí o storefront Shopify, lancei um configurador de produto em Three.js e construí a automação de fulfillment que sincroniza o time nos EUA, o armazém e o parceiro de manufatura na China.",
    },
    {
      position: "Desenvolvedor Web e Especialista em Modelagem 3D",
      company: "Stand It Up",
      dates: "ago 2022 – mai 2023",
      location: "Memphis, TN (Totalmente remoto)",
      description:
        "Construí o site da empresa do zero e desenhei a UI do catálogo de produtos para desktop e mobile. Produzi mais de 300 modelos 3D prontos para produção e defini convenções de CAD para manter a saída consistente em escala.",
    },
    {
      position: "Desenvolvedor",
      company: "Connect Smart Data",
      dates: "ago 2021 – ago 2022",
      location: "Porto Alegre, Brasil",
      description:
        "Construí dashboards internos e ferramentas para clientes com React e Node.js. Implementei instrumentação de analytics, automação de backend e enviei atualizações para os aplicativos iOS e Android da empresa.",
    },
  ],
  work: [
    {
      id: "legion-sabers",
      title: "Legion Sabers",
      description:
        "Responsabilidade de ponta a ponta pelo storefront de um e-commerce DTC de sabres de luz customizados — React e TypeScript no Shopify, da descoberta do produto até o checkout.",
      href: "https://legionsabers.com",
      images: [
        {
          alt: "Página inicial do storefront Legion Sabers",
          caption: "Storefront",
          span: "md:col-span-2",
        },
        {
          alt: "Página de detalhe de um sabre customizado",
          caption: "Página do produto",
        },
        {
          alt: "Layout mobile do storefront",
          caption: "Mobile",
        },
        {
          alt: "Experiência de navegação por coleções",
          caption: "Coleções",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "fulfillment",
      title: "Automação de fulfillment",
      description:
        "Ferramentas internas que sincronizam o time nos EUA, o armazém e o parceiro de manufatura na China — para que os pedidos saiam do storefront e cheguem onde precisam sem planilhas.",
      images: [
        {
          alt: "Visão geral do dashboard de sincronização de pedidos",
          caption: "Dashboard de pedidos",
          span: "md:col-span-2",
        },
        {
          alt: "Visão de status do armazém",
          caption: "Armazém",
        },
        {
          alt: "Fluxo de handoff para manufatura",
          caption: "Manufatura",
        },
      ],
    },
    {
      id: "stand-it-up",
      title: "Stand It Up",
      description:
        "Site da empresa e catálogo de produtos construídos do zero — UI desktop e mobile, além de um pipeline de CAD que produziu mais de 300 modelos 3D prontos para produção.",
      images: [
        {
          alt: "Página inicial de marketing da Stand It Up",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          alt: "Grade do catálogo de produtos",
          caption: "Catálogo",
        },
        {
          alt: "Navegação mobile do catálogo",
          caption: "Catálogo mobile",
        },
        {
          alt: "Exemplos de modelos 3D de produto",
          caption: "Modelos 3D",
          span: "md:col-span-2",
        },
      ],
    },
  ],
  maker: [
    {
      id: "configurator",
      title: "Configurador de produto",
      description:
        "Um configurador em Three.js que permite montar um sabre customizado no navegador — preview 3D ao vivo, restrições de opções e caminho direto para o carrinho.",
      images: [
        {
          alt: "Vista desktop do configurador 3D de sabres",
          caption: "Builder desktop",
          span: "md:col-span-2 md:row-span-2",
        },
        {
          alt: "Painel de seleção de peças no configurador",
          caption: "Painel de peças",
        },
        {
          alt: "Experiência mobile do configurador",
          caption: "Mobile",
        },
        {
          alt: "Sabre configurado pronto para adicionar ao carrinho",
          caption: "Pronto para o carrinho",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "cad-pipeline",
      title: "Convenções de CAD",
      description:
        "Padrões de modelagem e nomenclatura para manter consistente uma biblioteca grande de assets de produto — o trabalho de sistemas pouco glamouroso que torna o 3D usável em escala.",
      images: [
        {
          alt: "Diagrama de convenções de nomes e camadas em CAD",
          caption: "Convenções",
          span: "md:col-span-2",
        },
        {
          alt: "Lote de assets 3D prontos para produção",
          caption: "Lote de assets",
        },
      ],
    },
  ],
  fun: [
    {
      id: "personal-site",
      title: "Este site",
      description:
        "Um site pessoal bilíngue em Next.js — roteamento por Accept-Language, dicionários en / pt-BR e um layout de duas colunas legível no desktop e no celular.",
      images: [
        {
          alt: "Coluna sobre do site pessoal",
          caption: "Sobre",
        },
        {
          alt: "Galeria de projetos do site pessoal",
          caption: "Galeria",
        },
        {
          alt: "Seletor de idioma entre inglês e português",
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

export default ptBR
