import Tag from "../Tag"

interface TaggedContnetsProps {
  title: string,
  description: string,
  tagType?: string,
  tagTitle?: string
  tagged?: boolean
}
export default function TaggedContents({ tagged, title, description, tagType, tagTitle }: TaggedContnetsProps) {
  return (
    <div className="flex justify-between items-center mx-4 my-3">
      <div className="flex flex-col gap-3">
        <h3>{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {
        tagged == false ? "" : <div>
          <Tag type={tagType} title={tagTitle} />
        </div>
      }
    </div>
  )
}
