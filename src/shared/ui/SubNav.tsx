import { NavLink, useLocation, useParams } from 'react-router'
import { content } from '@/content'
import { SUBNAV_ITEMS } from '@/content/types'

const RESERVED = new Set(['busca', 'circuitos', 'entrar', 'perfil', 'notificacoes'])

export function SubNav() {
  const { categoria } = useParams()
  const location = useLocation()
  const fromPath = location.pathname.split('/')[1]
  const slug =
    (categoria && content.isCategorySlug(categoria) && categoria) ||
    (content.isCategorySlug(fromPath) ? fromPath : 'f1')

  if (RESERVED.has(fromPath) && fromPath !== '') return null

  return (
    <nav className="subnav" aria-label="Seções da categoria">
      <div className="subnav-scroll">
        {SUBNAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            to={`/${slug}/${item.key}`}
            className={({ isActive }) => `sub-link${isActive ? ' is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
