import { SyntheticEvent, useState } from 'react'
import { IPost } from '../models/interfaces'
import { PostCard } from './PostCard'

type Props = {
  posts: IPost[],
  name: string
}

export const PostSection = ({ posts, name } : Props) => {
  const [showSection, setShowSection] = useState<boolean>(true);

  const handleToggle = (e :SyntheticEvent) => {
    e.preventDefault();
    setShowSection(!showSection);
  }


  return (
    <section className='flex flex-col'>
      <header onClick={(e) => handleToggle(e)} className="cursor-pointer flex text-4xl py-3 my-8 border-y justify-center relative">
        <h2 className="">{ name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <span className="absolute end-0">{showSection ? (<i className="fa-solid fa-chevron-down"></i>) : (<i className="fa-solid fa-chevron-up"></i>)} </span>
      </header>
      { showSection &&
        <div className="grid grid-cols-3 gap-12">
          {posts.map(post => <PostCard post={post} key={post.id} />)}
        </div>
      }
    </section>
  )
}
