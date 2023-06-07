import styled from 'styled-components'
import { Link } from 'wouter'

export const HeaderApp = styled.nav`
  align-items: center;
  border-bottom: 1px solid #eee;
  display: flex;
  gap: 16px;
  padding: 12px 32px;
`

export const Logo = styled.img`
  width: 24px;
  height: 24px;
`

export const HeaderLink = styled.a`
  color: #374151;
  font-size: 18px;
  margin: 0;
  text-decoration: none;
`

export const StyledArticle = styled.article`
  color: '#374151';
  margin-bottom: 8px;
`

export const StoryHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
  line-height: 24px;
`

export const StoryTitle = styled.a`
  text-decoration: none;
  color: #111;
  font-size: 18px;
`

export const StoryLink = styled(Link)`
  color: #888;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const StoryFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 24px;
  font-size: 12px;
`

export const List = styled.ul`
  list-style: none;
`

export const InfinityScrollButton = styled.button`
  margin-left: 2.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  touch-action: manipulation;
  &:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`
