import { type FC } from 'react'
import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemInfo } from '../services/hacker-news'
import { getRelativeTime } from '../utils/getRelativeTime'
import {
  story,
  storyFooter,
  storyHeader,
  storyLink,
  storyTitle
} from './Story.css'
import { StoryLoader } from './StoryLoader'

interface Props {
  id: number
  index: number
}

export const Story: FC<Props> = ({ id, index }) => {
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
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1}. </small>
        <a
          className={storyTitle}
          href={url}
          target='_blank'
          rel='noreferrer noopener'
        >
          {title}
        </a>
        <a
          className={storyLink}
          href={url}
          target='_blank'
          rel='noreferrer noopener'
        >
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/article/${id}`}>
          by {by}
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          <time dateTime={new Date(time * 1000).toISOString()}>
            {elapsedTime}
          </time>
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}
