export interface IPost {
  id: number,
  userId: number
  title: string,
  body: string,
  reactions: number,
  tags: string[],
}