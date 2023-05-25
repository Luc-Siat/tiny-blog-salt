export type IPost = {
  id: number,
  userId: number
  title: string,
  body: string,
  reactions: number,
  tags: string[],
  imageUrl: string
}

export type IImage = {
  download_url:string
}
