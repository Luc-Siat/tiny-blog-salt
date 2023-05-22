import { IImage } from "../models/interfaces";

export const getRandomImagesfromApi = async () => {
  const response = (await fetch("https://picsum.photos/v2/list")).json();
  return await response as IImage[];
}
