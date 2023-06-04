import useSWRInfinite from 'swr/infinite'
import { Story } from '../components/Story'
import { getTopStories } from '../services/hacker-news'
import { infinityScrollButton, list } from './TopStories.css'

export default function TopStoriesPage() {
  const { data, size, setSize } = useSWRInfinite(
    index => `stories/${index + 1}`,
    key => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )

  const stories = data?.flat()
  return (
    <>
      <ul className={list}>
        {stories?.map((id: number, index: number) => {
          return (
            <li key={id}>
              <Story id={id} index={index} />
            </li>
          )
        })}
      </ul>

      <button
        className={infinityScrollButton}
        onClick={() => {
          setSize(size + 1)
        }}
      >
        Load more
      </button>
    </>
  )
}
