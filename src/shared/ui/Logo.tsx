import { Link } from 'react-router'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Push & Pass — início">
      <span className="logo-push">Push</span>
      <span className="logo-amp">&amp;</span>
      <span className="logo-pass">Pass</span>
    </Link>
  )
}
