import type { Dictionary } from "@/lib/i18n/types"

const ptBR: Dictionary = {
  meta: {
    title: "João Bertotto",
    description:
      "Engenheiro front-end construindo aplicações web em produção com React, TypeScript e Next.js.",
  },
  ui: {
    experience: "Experiência",
    contact: "Contato",
    work: "Trabalho",
    siteInfo: "Informações do site",
    projectGallery: "Galeria de projetos",
    language: "Idioma",
    project: "Projeto",
  },
  intro: {
    name: "João Bertotto",
    role: "Engenheiro de Software",
    bio: "Engenheiro de software com 5 anos construindo aplicações web em produção com React, TypeScript e Next.js. Atualmente sou o único desenvolvedor de um produto de e-commerce nos EUA, responsável pelo storefront de ponta a ponta — da interface para o cliente até os sistemas que levam os pedidos à logística. Quatro anos de trabalho remoto e assíncrono com times baseados nos EUA.",
    location: "Porto Alegre, Brasil (UTC−3) · Remoto",
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
}

export default ptBR
