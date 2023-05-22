import { IImage } from "../models/interfaces";

export const getRandomImagesfromApi = async () => {
  const response = (await fetch("https://picsum.photos/v2/list?page=2")).json();
  return await response as IImage[];
}
