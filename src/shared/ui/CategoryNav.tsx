import { useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { content } from '@/content'

export function CategoryNav() {
  const { categoria } = useParams()
  const primary = content.listPrimaryCategories()
  const more = content.listMoreCategories()
  const [open, setOpen] = useState(false)
  const moreActive = more.some((item) => item.slug === categoria)

  return (
    <nav className="category-nav" aria-label="Categorias">
      <div className="category-scroll">
        {primary.map((item) => (
          <NavLink
            key={item.slug}
            to={`/${item.slug}`}
            className={({ isActive }) =>
              `cat-link${isActive || categoria === item.slug ? ' is-active' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
        <div className="mais-wrap">
          <button
            type="button"
            className={`cat-link mais-btn${moreActive ? ' is-active' : ''}`}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Mais
          </button>
          {open ? (
            <div className="mais-menu">
              {more.map((item) => (
                <NavLink
                  key={item.slug}
                  to={`/${item.slug}`}
                  className="mais-item"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
