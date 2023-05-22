import { SyntheticEvent, useState } from 'react'
import { IPost } from '../models/interfaces'
import { PostCard } from './PostCard'

type PostSectionProps = {
  posts: IPost[],
  name: string
}

export const PostSection = ({ posts, name } : PostSectionProps) => {
  const [showSection, setShowSection] = useState<boolean>(true);

  const handleToggle = (e :SyntheticEvent) => {
    e.preventDefault();
    setShowSection(!showSection);
  }


  return (
    <section className='flex flex-col'>
      <header className="flex text-4xl py-3 my-8 border-y justify-center relative">

        <h2 className="">{name.toUpperCase()}</h2>
        <button className="absolute end-0" onClick={(e) => handleToggle(e)}>{showSection ? (<i className="fa-solid fa-chevron-down"></i>) : (<i className="fa-solid fa-chevron-up"></i>)} </button>
      </header>
      { showSection &&
        <div className="grid grid-cols-3 gap-12">
          {posts.map(post => <PostCard post={post} key={post.id} />)}
        </div>
      }
    </section>
  )
}
