import type { Dictionary } from "@/content/types"

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
    contact: {
      title: "Contato · João Bertotto",
      description:
        "Fale comigo sobre vagas de front-end, trabalhos freelance ou qualquer coisa que você viu no site.",
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
    cv: "Baixar CV",
    project: "Projeto",
    visitProject: "Visitar projeto",
    inProgress: {
      label: "Em andamento",
    },
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
    r2d2: {
      label: "Dróide",
      title: "R2-D2",
      hint: "Toque para acordar",
      loading: "Ligando o dróide…",
      unavailable: "Dróide offline",
      action: "Cutucar o R2-D2",
    },
    nav: {
      home: "Início",
      portfolio: "Portfólio",
      contact: "Contato",
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
  contactPage: {
    heading: "Vamos conversar",
    body: "Estou aberto a vagas de front-end e full-stack, e a trabalhos freelance em storefronts, ferramentas de produto e configuradores 3D. Qualquer coisa que você viu neste site também vale.",
    availability: {
      label: "Agora",
      replyTime: "Costumo responder em até um dia.",
    },
    links: {
      label: "Em outros lugares",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    form: {
      heading: "Enviar uma mensagem",
      subject: "Assunto",
      subjectPlaceholder: "Vaga de front-end na …",
      message: "Mensagem",
      messagePlaceholder: "Um pouco sobre a vaga, o projeto ou a ideia.",
      send: "Abrir no app de e-mail",
      hint: "Isto abre seu app de e-mail com a mensagem pronta para enviar — nada é enviado para este site.",
    },
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
        "Único responsável pelo front-end de um storefront DTC de sabres de luz — arquitetura de produto, navegação por coleções e checkout no Shopify. Sustenta um catálogo que vai de sabres de entrada a réplicas fiéis às telas, além da vitrine online da Docking Bay 45, o espaço físico de 280 m² da marca em Portland.",
      href: "https://legionsabers.com",
      images: [
        {
          src: "/work/legion-sabers/storefront.png",
          alt: "Página inicial do storefront Legion Sabers",
          caption: "Storefront",
          span: "md:col-span-2",
        },
        {
          src: "/work/legion-sabers/product.png",
          alt: "Página de detalhe de um sabre customizado",
          caption: "Página do produto",
        },
        {
          src: "/work/legion-sabers/mobile.png",
          alt: "Layout mobile do storefront",
          caption: "Mobile",
        },
        {
          src: "/work/legion-sabers/collections.png",
          alt: "Experiência de navegação por coleções",
          caption: "Coleções",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "wotan-brindes",
      title: "Wotan Brindes",
      description:
        "Site de brindes personalizados e presentes corporativos, construído de ponta a ponta na Pegasus Digital Services — o estúdio que cofundei. Catálogo e páginas de produto alimentam um fluxo de contato via WhatsApp, que é como o negócio realmente fecha vendas.",
      href: "https://wotanbrindes.com.br",
      images: [
        {
          src: "/work/wotan-brindes/home.png",
          alt: "Página inicial do site Wotan Brindes",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          src: "/work/wotan-brindes/catalog.png",
          alt: "Navegação pelo catálogo de produtos",
          caption: "Catálogo",
        },
        {
          src: "/work/wotan-brindes/product.png",
          alt: "Página de detalhe do produto",
          caption: "Página do produto",
        },
        {
          src: "/work/wotan-brindes/mobile.png",
          alt: "Layout mobile do site Wotan Brindes",
          caption: "Mobile",
          span: "md:col-span-2",
        },
      ],
    },
    {
      id: "fulfillment",
      title: "Automação de fulfillment",
      description:
        "Ferramentas internas que colocam o time nos EUA, o armazém e o parceiro de manufatura na China na mesma fonte de verdade. Substituíram um handoff por planilha — os pedidos saem do storefront e chegam à unidade certa sem ninguém redigitar nada.",
      images: [
        {
          src: "/work/fulfillment/orders.png",
          alt: "Visão geral do dashboard de sincronização de pedidos",
          caption: "Dashboard de pedidos",
          span: "md:col-span-2",
        },
        {
          src: "/work/fulfillment/warehouse.png",
          alt: "Visão de status do armazém",
          caption: "Armazém",
        },
        {
          src: "/work/fulfillment/manufacturing.png",
          alt: "Fluxo de handoff para manufatura",
          caption: "Manufatura",
        },
      ],
    },
    {
      id: "stand-it-up",
      title: "Stand It Up",
      description:
        "Site da empresa e catálogo de produtos construídos do zero — páginas de marketing, UI do catálogo e um pipeline de CAD que transformou dados brutos de produto em mais de 300 modelos 3D prontos para produção, sem modelar um a um.",
      images: [
        {
          src: "/work/stand-it-up/home.png",
          alt: "Página inicial de marketing da Stand It Up",
          caption: "Home",
          span: "md:col-span-2",
        },
        {
          src: "/work/stand-it-up/catalog.png",
          alt: "Grade do catálogo de produtos",
          caption: "Catálogo",
        },
        {
          src: "/work/stand-it-up/mobile.png",
          alt: "Navegação mobile do catálogo",
          caption: "Catálogo mobile",
        },
        {
          src: "/work/stand-it-up/models.png",
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

export default ptBR
