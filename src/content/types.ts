export const PRIMARY_CATEGORIES = [
  { slug: 'f1', name: 'F1', fullName: 'Fórmula 1' },
  { slug: 'wec', name: 'WEC', fullName: 'WEC' },
  { slug: 'indy', name: 'Indy', fullName: 'IndyCar' },
  { slug: 'stock-car', name: 'Stock Car', fullName: 'Stock Car' },
  { slug: 'gt3', name: 'GT3', fullName: 'GT3' },
  { slug: 'sim-racing', name: 'Sim Racing', fullName: 'Sim Racing' },
] as const

export const MORE_CATEGORIES = [
  { slug: 'formula-e', name: 'Fórmula E', fullName: 'Fórmula E' },
  { slug: 'nascar', name: 'NASCAR', fullName: 'NASCAR' },
  { slug: 'wrc', name: 'WRC', fullName: 'WRC' },
] as const

export const ALL_CATEGORIES = [...PRIMARY_CATEGORIES, ...MORE_CATEGORIES]

export type CategorySlug = (typeof ALL_CATEGORIES)[number]['slug']

export const SUBNAV_ITEMS = [
  { key: 'noticias', label: 'Notícias' },
  { key: 'pilotos', label: 'Pilotos' },
  { key: 'equipes', label: 'Equipes' },
  { key: 'calendario', label: 'Calendário' },
  { key: 'resultados', label: 'Resultados' },
  { key: 'classificacao', label: 'Classificação' },
  { key: 'onde-assistir', label: 'Onde Assistir' },
] as const

export type SubnavKey = (typeof SUBNAV_ITEMS)[number]['key']

export type Category = {
  slug: CategorySlug
  name: string
  fullName: string
}

export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  body: string[]
  category: CategorySlug
  publishedAt: string
  source: string
  featured: boolean
  imageLabel: string
}

export type SessionKind = 'TL1' | 'TL2' | 'TL3' | 'Classificação' | 'Sprint' | 'Corrida'

export type RaceSession = {
  kind: SessionKind
  startsAt: string
}

export type Broadcaster = {
  name: string
}

export type RaceEvent = {
  slug: string
  name: string
  circuitName: string
  city: string
  country: string
  countryCode: string
  category: CategorySlug
  startDate: string
  endDate: string
  sessions: RaceSession[]
  broadcasters: Broadcaster[]
  imageLabel: string
}

export type ResultRow = {
  position: number
  driverSlug: string
  laps: number
  gap: string
  tires: string
}

export type RaceResult = {
  eventSlug: string
  session: SessionKind
  rows: ResultRow[]
  fastestLap: { driverSlug: string; time: string }
}

export type StandingRow = {
  position: number
  driverSlug: string
  teamSlug: string
  points: number
}

export type Driver = {
  slug: string
  name: string
  shortName: string
  number: number
  teamSlug: string
  category: CategorySlug
  nationality: string
  countryCode: string
  birthDate: string
  hometown: string
  bio: string[]
  stats: {
    races: number
    wins: number
    podiums: number
    points: number
  }
  titles: number[]
}

export type Team = {
  slug: string
  name: string
  category: CategorySlug
  base: string
  summary: string
  driverSlugs: string[]
}

export type Circuit = {
  slug: string
  name: string
  location: string
  country: string
  countryCode: string
  lengthKm: number
  laps: number
  categories: CategorySlug[]
  summary: string
  featured: boolean
}

export type SearchHit = {
  kind: 'noticia' | 'piloto' | 'evento' | 'circuito'
  title: string
  href: string
  subtitle: string
}
