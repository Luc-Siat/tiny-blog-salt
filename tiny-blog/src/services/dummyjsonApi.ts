import { IImage, IPost } from "../models/interfaces";
import { getRandomImagesfromApi } from "./loremPicsumApi";


// export const getPostFromApi = async () => {
//   const response = (await fetch('https://dummyjson.com/posts')).json();
//   const posts = (await response).posts as IPost[] ;

//   const images = await getRandomImagesfromApi();

  // return addImagesToPosts(images, posts)
// }

 export const getPostFromApi = async () => {

    const response = (await fetch('src/services/Mockdata.json')).json();
    const posts = (await response).posts as Omit<IPost, "imageUrl">[];

    const images = await getRandomImagesfromApi();

    const imagedPost = addImagesToPosts(images, posts)
    return imagedPost;
  }


  const addImagesToPosts = (images: IImage[], posts: Partial<IPost>[]) => {

    const Imagedposts = posts.map((post, index) => {
      post.imageUrl = images[index].download_url;
      return post;
    })

    return Imagedposts as IPost[];
  }
