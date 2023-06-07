import { type FC } from 'react'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import {
  StoryFooter,
  StoryHeader,
  StoryLink,
  StoryTitle,
  StyledArticle
} from '../styles/StyledComponets'
import { type StoryProps } from '../types.d'
import { getRelativeTime } from '../utils/getRelativeTime'
import { StoryLoader } from './StoryLoader'

export const Story: FC<StoryProps> = ({ id, index }) => {
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <StoryLoader />
  }

  const { by, kids, score, title, url, time } = data

  const elapsedTime = getRelativeTime(time)
  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  return (
    <StyledArticle>
      <StoryHeader>
        <small>{index + 1}. </small>
        <StoryTitle href={url} target='_blank' rel='noreferrer noopener'>
          {title}
        </StoryTitle>
        <StoryLink as='a' href={url} target='_blank' rel='noreferrer noopener'>
          ({domain})
        </StoryLink>
      </StoryHeader>
      <StoryFooter>
        <span>{score} points</span>
        <StoryLink href={`/article/${id}`}>by {by}</StoryLink>
        <StoryLink href={`/article/${id}`}>
          <time dateTime={new Date(time * 1000).toISOString()}>
            {elapsedTime}
          </time>
        </StoryLink>
        <StoryLink href={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </StoryLink>
      </StoryFooter>
    </StyledArticle>
  )
}
