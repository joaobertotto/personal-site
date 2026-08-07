export type Intro = {
  name: string
  role: string
  bio: string
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

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  ui: {
    experience: string
    contact: string
    work: string
    fun: string
    siteInfo: string
    projectGallery: string
    language: string
    project: string
  }
  intro: Intro
  about: About
  experience: Experience[]
}
