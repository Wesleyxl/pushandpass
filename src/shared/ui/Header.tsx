import { useEffect, useId, useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { useAuth } from '@/modules/auth/AuthContext'
import { Logo } from './Logo'

export function Header() {
  const { user, notifications } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const searchId = useId()
  const unread = notifications.filter((item) => !item.read).length

  useEffect(() => {
    const handle = window.setTimeout(() => {
      if (query.trim().length >= 2 && window.location.pathname === '/busca') {
        navigate(`/busca?q=${encodeURIComponent(query.trim())}`, { replace: true })
      }
    }, 300)
    return () => window.clearTimeout(handle)
  }, [query, navigate])

  function onSearch(event: FormEvent) {
    event.preventDefault()
    const q = query.trim()
    if (q.length >= 2) navigate(`/busca?q=${encodeURIComponent(q)}`)
    else navigate('/busca')
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <form className="header-search" onSubmit={onSearch} role="search">
          <label className="sr-only" htmlFor={searchId}>
            Buscar no portal
          </label>
          <input
            id={searchId}
            type="search"
            name="q"
            placeholder="Buscar notícias, pilotos, circuitos..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="icon-btn" aria-label="Buscar">
            ⌕
          </button>
        </form>
        <div className="header-actions">
          {user ? (
            <>
              <Link to="/notificacoes" className="icon-btn notify-btn" aria-label="Notificações">
                ⌭
                {unread > 0 ? <span className="badge">{unread}</span> : null}
              </Link>
              <Link to="/perfil" className="avatar" title={user.name}>
                {user.name.slice(0, 1).toUpperCase()}
              </Link>
            </>
          ) : (
            <Link to="/entrar" className="entrar-btn">
              Entrar <span aria-hidden="true">›</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
