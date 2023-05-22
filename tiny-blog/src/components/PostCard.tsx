import React from 'react'
import { IPost } from '../models/interfaces'

type PostCardProps = {
  post: IPost
}

export const PostCard = ({ post } : PostCardProps) => {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-column justify-between">
        <img className="w-full" src="https://picsum.photos/400/200" alt="random image"/>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{post.title}</h3>
          <p className="text-gray-700 text-base">{post.body.slice(0, 100)}...</p>
        </div>
        <div className='flex justify-between items-center p-3'>
          <ul className='flex gap-1'>{post.tags.map(tag =>  {
                return <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" key={tag+post.id}>{tag}</li>
              }
            )}
          </ul>
          <p className="text-end font-semibold">{post.reactions} ❤️</p>
        </div>
      </div>
  )
}
