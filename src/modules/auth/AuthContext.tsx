import { createContext, use, useMemo, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'push-and-pass-session'
const FAVORITES_KEY = 'push-and-pass-favorites'

export type SessionUser = {
  name: string
  email: string
}

export type NotificationItem = {
  id: string
  title: string
  body: string
  href: string
  read: boolean
}

type AuthState = {
  user: SessionUser | null
  favorites: string[]
  notifications: NotificationItem[]
  login: (user: SessionUser) => void
  logout: () => void
  toggleFavorite: (slug: string) => void
  markNotificationsRead: () => void
}

const AuthContext = createContext<AuthState | null>(null)

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

const DEMO_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: 'GP de Mônaco — Classificação',
    body: 'Lembrete: a classificação começa neste sábado.',
    href: '/f1/calendario',
    read: false,
  },
  {
    id: 'n2',
    title: '24 Horas de Le Mans',
    body: 'A semana de Le Mans começa. Veja onde assistir.',
    href: '/wec/onde-assistir',
    read: false,
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(() =>
    readJson<SessionUser | null>(STORAGE_KEY, null),
  )
  const [favorites, setFavorites] = useState<string[]>(() => readJson<string[]>(FAVORITES_KEY, []))
  const [notifications, setNotifications] = useState<NotificationItem[]>(DEMO_NOTIFICATIONS)

  const value = useMemo<AuthState>(
    () => ({
      user,
      favorites,
      notifications: user ? notifications : [],
      login: (next) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        setUser(next)
      },
      logout: () => {
        localStorage.removeItem(STORAGE_KEY)
        setUser(null)
      },
      toggleFavorite: (slug) => {
        setFavorites((current) => {
          const next = current.includes(slug)
            ? current.filter((item) => item !== slug)
            : [...current, slug]
          localStorage.setItem(FAVORITES_KEY, JSON.stringify(next))
          return next
        })
      },
      markNotificationsRead: () => {
        setNotifications((current) => current.map((item) => ({ ...item, read: true })))
      },
    }),
    [user, favorites, notifications],
  )

  return <AuthContext value={value}>{children}</AuthContext>
}

export function useAuth() {
  const ctx = use(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return ctx
}
