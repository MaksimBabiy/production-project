export { commentActions, commentReducer } from "./model/slice/commentSlice";
export { Comment, CommentSchema } from "./model/types/comment";
export { fetchCommentsById } from "./model/services/fetchCommentsById/fetchCommentsById";
export {
  getCommentsData,
  getCommentsIsLoading,
  getCommentsError,
} from "./model/selectors/commentsSelector";
export { CommentListBlock } from "./ui/CommentListBlock/CommentListBlock";
export { getArticleComments } from "./model/slice/commentSlice";
