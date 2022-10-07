import { PostReqModel, PostResModel } from '@/api/sample/sample.models';
import { PostStoreModel } from '@/store/sample/sample.types';
import SampleAPI from '@/api/sample';
import { ref } from 'vue';
import _ from 'lodash';

export const mappingPosts = (posts: PostResModel[]): PostStoreModel[] => {
  return _.map(posts, (post) => {
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    };
  });
};

export const fetchPosts = async (req?: PostReqModel): Promise<PostResModel[]> => {
  const sampleAPI = new SampleAPI();

  let data: PostResModel[] = [];

  try {
    data = await sampleAPI.getPosts(req);
  } catch (e) {
    console.error(e);
  }

  return data;
};

export const usePosts = () => {
  const state = ref<PostStoreModel[]>([]);
  const isLoading = ref(false);
  const isSuccess = ref(false);

  const execute = async (req?: PostReqModel) => {
    try {
      isLoading.value = true;

      const posts = await fetchPosts(req);

      state.value = mappingPosts(posts);

      isSuccess.value = true;
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    execute,
    state,
    isLoading,
    isSuccess,
  };
};
