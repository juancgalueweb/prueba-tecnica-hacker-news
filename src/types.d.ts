export interface FormattedTextProps {
  comment: string
}

export interface ListOfCommentsProps {
  ids: number[]
}

export interface CommentProps {
  id: number
}

export interface StoryProps {
  id: number
  index: number
}

export interface DetailPageProps {
  params: {
    id: string
  }
}

export interface DataProps {
  kids: number[]
  title: string
}
