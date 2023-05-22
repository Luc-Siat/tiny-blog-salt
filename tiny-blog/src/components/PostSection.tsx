import React from 'react'
import { IPost } from '../models/interfaces'

type PostSectionProps = {
  posts: IPost[]
}

export const PostSection = ({ posts } : PostSectionProps) => {
  return (
    <div>PostSection</div>
  )
}
