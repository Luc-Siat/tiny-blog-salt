export interface IPost {
  id: number,
  userId: number
  title: string,
  body: string,
  reactions: number,
  tags: string[],
  imageUrl: string
}

export interface IImage {
  download_url:string
}
