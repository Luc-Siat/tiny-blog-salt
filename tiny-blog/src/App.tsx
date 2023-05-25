import { useEffect, useState } from 'react'
import './App.css'
import { getPostFromApi } from './services/dummyjsonApi';
import { IPost } from './models/interfaces';
import { PostSection } from './components/PostSection';
import { Navbar } from './components/Navbar';
import { json } from 'stream/consumers';

type LoadingState = {
  status: "LOADING",
}

type ErrorState = {
  status: "ERROR",
  error: { code: string, message: string }
}

type OkState = {
  status: "OK",
  data: { posts: IPost[], sections: string[]}
}

type State = LoadingState | ErrorState | OkState;

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [sections, setSections] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [state, setState] = useState<State>({status: "LOADING"});

  const getRandomSections = (posts : IPost[]) => {
    const tags : string[] = [];
    for(const post of posts) {
      post.tags.forEach(tag => {

        if (tags.includes(tag) || tags.length >= 5) {
          return;
        }
        tags.push(tag);
      });
    }
    return tags;
  }

  const getData = async () => {
    const posts = await getPostFromApi();
    if (!posts.ok) {
      setState({error: posts.error, status: "ERROR"})
    } else {
      setState({data: {posts: posts.data, sections: getRandomSections(posts.data) }, status: "OK"})
      // setSections(getRandomSections(posts));
      // setPosts(posts);
    }
  }

  useEffect(() => {
l
  }, [])


  switch (state.status) {
    case "LOADING":
      return (
        <p>Loading..</p>
      )
      break;
    case "ERROR":
      return (
        <p>error</p>
      )

    case "OK":
      return (
        <pre>{JSON.stringify(state.data, null, 2)}</pre>
      )

    default:
      break;
  }
  return (
    <>
      <Navbar />
      <header className=" p-8 bg-cover w-screen">
        <h1 className="text-center text-8xl m-20 text-white"> Tiny blog</h1>
      </header>
      <main className='flex flex-wrap flex-col container mx-auto bg-white rounded p-4 mb-6'>
        <p>select your favorite tag here! <i className="fa-solid fa-arrow-down"></i></p>
        <select className="text-center text-2xl border rounded-full" onChange={(e) => setFilter(e.target.value)} name="filter" id="filter">
          {sections.map(section => <option value={section}>{section}</option> )}
        </select>
        {
          sections.filter(section => section == filter || filter == "").map(section => <PostSection posts={posts.filter(post => post.tags.some(tag => tag == section))} name={section} key={section}/>)
        }
      </main>
    </>
  )
}

export default App
