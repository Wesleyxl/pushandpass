import { Link } from 'react-router'

type Props = {
  title: string
  description?: string
  to?: string
  cta?: string
}

export function PagePlaceholder({ title, description, to, cta }: Props) {
  return (
    <section className="placeholder-page">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {to && cta ? (
        <Link className="cta" to={to}>
          {cta}
        </Link>
      ) : null}
    </section>
  )
}
