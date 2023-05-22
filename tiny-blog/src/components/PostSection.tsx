import React from 'react'
import { IPost } from '../models/interfaces'
import { PostCard } from './PostCard'

type PostSectionProps = {
  posts: IPost[]
}

export const PostSection = ({ posts } : PostSectionProps) => {
  return (
    <section>
      {posts.map(post => <PostCard post={post} />)}
    </section>
  )
}
