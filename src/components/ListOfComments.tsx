import { type FC } from 'react'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { type CommentProps, type ListOfCommentsProps } from '../types.d'
import { getRelativeTime } from '../utils/getRelativeTime'
import { CommentLoader } from './CommentLoader'
import { FormattedText } from './FormattedText'

const Comment: FC<CommentProps> = ({ id }) => {
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

export const ListOfComments: FC<ListOfCommentsProps> = ({ ids }) => {
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
