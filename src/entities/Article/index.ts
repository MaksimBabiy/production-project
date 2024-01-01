export { ArticleDetail } from "./ui/ArticleDetail/ArticleDetail";
export type { Article } from "./model/types/article";
export { fetchArticleData } from "./model/services/fetchArticleData/fetchArticleData";
export {
  articleActions,
  articleReducer,
} from "./model/slice/articleDetailsSlice";
export { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
