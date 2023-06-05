import { type FC } from 'react'
import { type FormattedTextProps } from '../types.d'

export const FormattedText: FC<FormattedTextProps> = ({ comment }) => {
  return <div dangerouslySetInnerHTML={{ __html: comment }}></div>
}
