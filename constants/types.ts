export type Intro = {
  name: string
  role: string
  bio: string
  location: string
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
