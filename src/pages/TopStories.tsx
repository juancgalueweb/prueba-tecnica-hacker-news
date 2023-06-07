import useSWRInfinite from 'swr/infinite'
import { Story } from '../components/Story'
import { getTopStories } from '../services/hacker-news'
import { InfinityScrollButton, List } from '../styles/StyledComponets'

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
      <List>
        {stories?.map((id: number, index: number) => {
          return (
            <li key={id}>
              <Story id={id} index={index} />
            </li>
          )
        })}
      </List>

      <InfinityScrollButton
        onClick={() => {
          setSize(size + 1)
        }}
      >
        Load more
      </InfinityScrollButton>
    </>
  )
}
