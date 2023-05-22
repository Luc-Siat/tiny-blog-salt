import { useEffect, useState } from 'react'
import './App.css'
import { getPostFromApi } from './services/dummyjsonApi';
import { IPost } from './models/interfaces';
import { PostSection } from './components/PostSection';
import { getRandomImagesfromApi } from './services/loremPicsumApi';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [sections, setSections] = useState<string[]>([]);

  const getRandomSections = (posts : IPost[]) => {
    const tags : string[] = [];
    for(const post of posts) {

      if (tags.length > 5) {
        setSections(tags);
        return;
      }

      post.tags.forEach(tag => {

        if (tags.includes(tag)) {
          return;
        }
        tags.push(tag);

      });
    }
  }

  const getData = async () => {
    const posts = await getPostFromApi();
    setPosts(posts);
    const images = await getRandomImagesfromApi();
    getRandomSections(posts);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
    <h1 className="text-center text-8xl m-12">Tiny blog</h1>
    <main className='flex flex-wrap flex-col  '>
      {
        sections.map(section => <PostSection posts={posts.filter(post => post.tags.some(tag => tag == section))} name={section}/>)
      }
    </main>
    </>
  )
}

export default App
