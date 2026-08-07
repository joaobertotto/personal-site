export type Intro = {
  name: string
  role: string
  bio: string
  /** Short one-liner for the portfolio page header */
  portfolioBio: string
  location: string
  avatarAlt: string
}

export type About = {
  heading: string
  body: string
}

export type Experience = {
  position: string
  company: string
  dates: string
  location?: string
  description?: string
}

export type Contact = {
  email: string
  website: string
  github: string
}

export type ProjectImage = {
  src?: string
  alt: string
  caption: string
  /** Tailwind classes for grid span / aspect, e.g. "md:col-span-2" */
  span?: string
}

export type Project = {
  id: string
  title: string
  description: string
  href?: string
  images: ProjectImage[]
}

export type PageMeta = {
  title: string
  description: string
}

export type ProjectHomeTile = {
  id: string
  kind: "project"
  projectId: string
  /** Tailwind grid span classes for the mosaic cell */
  span: string
}

export type WidgetHomeTile = {
  id: string
  kind: "weather" | "map" | "status" | "localTime" | "coffee"
  span: string
}

export type HomeTile = ProjectHomeTile | WidgetHomeTile

export type Dictionary = {
  meta: {
    home: PageMeta
    portfolio: PageMeta
  }
  ui: {
    experience: string
    contact: string
    work: string
    maker: string
    fun: string
    siteInfo: string
    projectGallery: string
    language: string
    project: string
    visitProject: string
    weather: {
      label: string
      loading: string
      error: string
      place: string
      conditions: {
        clear: string
        partlyCloudy: string
        fog: string
        drizzle: string
        rain: string
        snow: string
        showers: string
        thunderstorm: string
        mixed: string
      }
    }
    map: {
      label: string
      place: string
      alt: string
    }
    status: {
      label: string
      available: string
      around: string
      offline: string
    }
    localTime: {
      label: string
      timezone: string
    }
    coffee: {
      label: string
      unit: string
      add: string
    }
    nav: {
      home: string
      portfolio: string
      label: string
    }
  }
  intro: Intro
  about: About
  experience: Experience[]
  work: Project[]
  maker: Project[]
  fun: Project[]
  mosaic: {
    work: HomeTile[]
    maker: HomeTile[]
    fun: HomeTile[]
  }
}
