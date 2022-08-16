const SampleDoc = {
  posts: '/posts',
  post: (uid: string) => `${SampleDoc.posts}/${uid}`,
  comments: '/comments',
} as const;

export default SampleDoc;
