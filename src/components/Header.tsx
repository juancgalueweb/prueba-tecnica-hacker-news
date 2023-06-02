import { header, link, logo } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img className={logo} src='/logo.png' alt='Hacker News logo' />
      <a className={link} href='/'>
        Hacker News
      </a>
    </nav>
  )
}
