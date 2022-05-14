import { PostResponseModel } from '@/api/sample/sample.models';

export interface State {
  counter: number;
  name: string;
  posts: PostResponseModel[];
}
