import useSWR from 'swr'
import { Story } from '../components/Story'
import { getTopStories } from '../services/hacker-news'
import { list } from './TopStories.css'

export default function TopStoriesPage() {
  const { data } = useSWR('stories', () => getTopStories(1, 10))
  return (
    <>
      <ul className={list}>
        {data?.map((id: number, index: number) => {
          return (
            <li key={id}>
              <Story id={id} index={index} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
