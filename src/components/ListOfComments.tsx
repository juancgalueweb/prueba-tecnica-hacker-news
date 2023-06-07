import { type FC } from 'react'
import { type ListOfCommentsProps } from '../types.d'
import { Comment } from './Comment'

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
