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
        <div>
          <ul className='px-6 pt-4 pb-2'>{post.tags.map(tag =>  {
                return <li className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tag+post.id}>{tag}</li>
              }
            )}
          </ul>
          <p>{post.reactions} reactions</p>
        </div>
      </div>
  )
}
