import { Link } from 'react-router'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Tudo sobre o mundo do automobilismo. Do grid à bandeirada.</p>
        </div>
        <nav className="footer-links" aria-label="Rodapé">
          <Link to="/f1/noticias">Notícias</Link>
          <Link to="/f1/pilotos">Pilotos</Link>
          <Link to="/f1/equipes">Equipes</Link>
          <Link to="/f1/calendario">Calendário</Link>
          <Link to="/f1/resultados">Resultados</Link>
          <Link to="/f1/onde-assistir">Onde Assistir</Link>
          <Link to="/circuitos">Circuitos</Link>
        </nav>
      </div>
      <p className="copyright">© 2026 Push &amp; Pass. Todos os direitos reservados.</p>
    </footer>
  )
}
