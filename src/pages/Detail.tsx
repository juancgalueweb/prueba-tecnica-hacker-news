import { useEffect } from 'react'
import useSWR from 'swr'
import { CommentLoader } from '../components/CommentLoader'
import { ListOfComments } from '../components/ListOfComments'
import { getItemInfo } from '../services/hacker-news'
import { type DataProps, type DetailPageProps } from '../types.d'

export default function DetailPage(props: DetailPageProps) {
  const {
    params: { id }
  } = props

  const { data, isLoading } = useSWR(`story/${id}`, () =>
    getItemInfo(Number(id))
  )

  const { kids, title }: DataProps = data ?? {}
  const commentIds = kids?.slice(0, 10) ?? []

  useEffect(() => {
    document.title = `Hacker news - ${title}`
  }, [title])

  return (
    <div className=''>
      {isLoading ? <CommentLoader /> : <ListOfComments ids={commentIds} />}
    </div>
  )
}
