export const FormattedText = (props: { comment: string }) => {
  const { comment } = props
  return <div dangerouslySetInnerHTML={{ __html: comment }}></div>
}
