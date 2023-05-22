import { IPost } from "../models/interfaces";


export const getPostFromApi = async () => {
  const response = (await fetch('https://dummyjson.com/posts')).json();
  return (await response).posts as IPost[] ;
}