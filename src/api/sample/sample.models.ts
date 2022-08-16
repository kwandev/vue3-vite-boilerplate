export interface PostReqModel {
  id?: number;
  userId?: number;
}

export interface PostResModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}
