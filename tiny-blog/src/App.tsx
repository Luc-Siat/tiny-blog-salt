import { useEffect, useState } from 'react'
import './App.css'
import { getPostFromApi } from './services/dummyjsonApi';
import { IPost } from './models/interfaces';
import { PostCard } from './components/PostCard';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getData = async () => {
    setPosts(await getPostFromApi());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
    <h1 className="text-center text-8xl m-12">Tiny blog</h1>
    <main className='flex flex-wrap gap-8'>
      <section>
        
      </section>
     {posts.map(post => <PostCard post={post} />)}
    </main>
    </>
  )
}

export default App
