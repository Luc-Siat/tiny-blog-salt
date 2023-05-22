import { IPost } from '../models/interfaces'
import { PostCard } from './PostCard'

type PostSectionProps = {
  posts: IPost[],
  name: string
}

export const PostSection = ({ posts, name } : PostSectionProps) => {
  return (
    <section className='flex flex-col'>
      <h1 className="text-5xl py-3 my-8 border-y">{name.toUpperCase()}</h1>
      <div className="grid grid-cols-3 gap-12">
        {posts.map(post => <PostCard post={post} key={post.id} />)}
      </div>
    </section>
  )
}
