import { HeaderApp, HeaderLink, Logo } from '../styles/StyledComponets'

export const Header = () => {
  return (
    <HeaderApp>
      <Logo src='/logo.png' alt='Hacker News logo' />
      <HeaderLink href='/'>Hacker News</HeaderLink>
    </HeaderApp>
  )
}
