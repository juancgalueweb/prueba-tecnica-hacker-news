import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { getRelativeTime } from '../utils/getRelativeTime'
import { CommentLoader } from './CommentLoader'
import { FormattedText } from './FormattedText'

interface ListOfCommentsProps {
  ids: number[]
}

const Comment = (props: { id: number }) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, text, kids, time } = data

  const elapsedTime = getRelativeTime(time)

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>·</span>
            <span>{elapsedTime}</span>
          </small>
        </summary>
        <FormattedText comment={text} />
      </details>
      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

export const ListOfComments = (props: ListOfCommentsProps) => {
  const { ids } = props

  return (
    <ul style={{ listStyle: 'none' }}>
      {ids.map((id: number) => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  )
}
