import { useEffect } from 'react'
import useSWR from 'swr'
import { CommentLoader } from '../components/CommentLoader'
import { ListOfComments } from '../components/ListOfComments'
import { getItemInfo } from '../services/hacker-news'

interface DetailPageProps {
  params: {
    id: string
  }
}

interface dataProps {
  kids: number[]
  title: string
}

export default function DetailPage(props: DetailPageProps) {
  const {
    params: { id }
  } = props

  const { data, isLoading } = useSWR(`story/${id}`, () =>
    getItemInfo(Number(id))
  )

  const { kids, title }: dataProps = data ?? {}
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
