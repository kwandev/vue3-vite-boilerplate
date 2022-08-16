export interface State {
  counter: number;
  name: string;
  posts: PostStoreModel[];
}

export interface PostStoreModel {
  id: number;
  userId: number;
  body: string;
  title: string;
}
