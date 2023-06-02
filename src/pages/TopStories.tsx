import useSWR from 'swr'
import { Story } from '../components/Story'
import { getTopStories } from '../services/hacker-news'
import { list } from './TopStories.css'

export default function TopStoriesPage() {
  const { data, isLoading } = useSWR('stories', () => getTopStories(1, 3))
  return (
    <>
      <ul className={list}>
        {isLoading && <li>Loading...</li>}
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
