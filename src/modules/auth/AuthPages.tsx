import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import { content } from '@/content'
import { useAuth } from './AuthContext'
import { usePageMeta } from '@/shared/seo/usePageMeta'

export function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  usePageMeta('Entrar')

  if (user) return <Navigate to="/perfil" replace />

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim().toLowerCase()
    if (!trimmedName || !trimmedEmail.includes('@')) return
    login({ name: trimmedName, email: trimmedEmail })
    navigate('/perfil')
  }

  return (
    <div className="page narrow">
      <h1>Entrar</h1>
      <p>
        O login é opcional. Notícias, calendário e resultados continuam públicos. A conta de
        demonstração fica só neste navegador e não envia senha a nenhum servidor.
      </p>
      <form className="auth-form" onSubmit={onSubmit}>
        <label>
          Nome
          <input value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <button type="submit" className="cta">
          Continuar
        </button>
      </form>
    </div>
  )
}

export function ProfilePage() {
  const { user, logout, favorites } = useAuth()
  const navigate = useNavigate()

  usePageMeta('Perfil')

  if (!user) return <Navigate to="/entrar" replace />

  const favDrivers = favorites
    .map((slug) => content.getDriver(slug))
    .filter((item) => item !== undefined)

  return (
    <div className="page narrow">
      <h1>Olá, {user.name}</h1>
      <p className="muted">{user.email}</p>
      <h2>Pilotos favoritos</h2>
      {favDrivers.length === 0 ? (
        <p>Nenhum favorito ainda. Abra um perfil de piloto e salve.</p>
      ) : (
        <ul className="plain-list">
          {favDrivers.map((driver) => (
            <li key={driver.slug}>
              <Link to={`/${driver.category}/pilotos/${driver.slug}`}>{driver.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className="cta ghost"
        onClick={() => {
          logout()
          navigate('/')
        }}
      >
        Sair
      </button>
    </div>
  )
}

export function NotificationsPage() {
  const { user, notifications, markNotificationsRead } = useAuth()

  usePageMeta('Notificações')

  if (!user) return <Navigate to="/entrar" replace />

  return (
    <div className="page narrow">
      <h1>Notificações</h1>
      <p className="muted">Lembretes de demonstração. Nada é enviado por e-mail.</p>
      <ul className="plain-list">
        {notifications.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>
              <strong>{item.title}</strong>
              {!item.read ? ' · nova' : ''}
            </Link>
            <div className="muted">{item.body}</div>
          </li>
        ))}
      </ul>
      <button type="button" className="cta ghost" onClick={markNotificationsRead}>
        Marcar como lidas
      </button>
    </div>
  )
}
