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
  /** Handle only — the part after /in/ in your profile URL. Empty hides the link. */
  linkedin: string
}

export type ContactPage = {
  heading: string
  body: string
  availability: {
    label: string
    replyTime: string
  }
  links: {
    label: string
    email: string
    github: string
    linkedin: string
  }
  form: {
    heading: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    hint: string
  }
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
  kind:
    | "weather"
    | "map"
    | "status"
    | "localTime"
    | "coffee"
    | "r2d2"
    | "inProgress"
  span: string
}

export type HomeTile = ProjectHomeTile | WidgetHomeTile

export type Dictionary = {
  meta: {
    home: PageMeta
    portfolio: PageMeta
    contact: PageMeta
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
    cv: string
    project: string
    visitProject: string
    inProgress: {
      label: string
    }
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
    r2d2: {
      label: string
      title: string
      /** Shown once the model is on screen — nudges the click interaction. */
      hint: string
      loading: string
      /** Model missing or WebGL unavailable. */
      unavailable: string
      /** aria-label for the tile button. */
      action: string
    }
    nav: {
      home: string
      portfolio: string
      contact: string
      label: string
    }
  }
  intro: Intro
  about: About
  contactPage: ContactPage
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
