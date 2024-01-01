import { Article, ArticleView } from "../../model/types/article";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleListItemSkeleton from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";
type Props = {
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
};

const ArticleList = ({ articles, view, isLoading }: Props) => {
  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} key={article.id} view={view} />;
  };
  const skeletonRender = new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item) => <ArticleListItemSkeleton view={view} />);
  if (isLoading) {
    return <div className={cls.articleList}>{skeletonRender}</div>;
  }
  return (
    <div className={cls.articleList}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};

export default ArticleList;
