import { Link } from 'react-router'
import { usePageMeta } from '@/shared/seo/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Página não encontrada')

  return (
    <div className="page">
      <h1>Página não encontrada</h1>
      <p>Esse endereço não existe no portal, ou a categoria ainda não está no recorte.</p>
      <Link className="cta" to="/">
        Voltar ao início
      </Link>
    </div>
  )
}
