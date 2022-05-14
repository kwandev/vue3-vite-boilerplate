export interface PostRequestModel {
  id?: string;
  userId?: number | string;
}

export interface PostResponseModel {
  id?: string;
  title?: string;
  body?: string;
  userId?: number | string;
}
