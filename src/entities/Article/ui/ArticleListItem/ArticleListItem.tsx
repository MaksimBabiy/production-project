import { classNames } from "shared/lib/classNames";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import cls from "./ArticleListItem.module.scss";
import Icon from "shared/ui/Icon/Icon";
import Text from "shared/ui/Text/Text";
import EyeIcon from "shared/assets/icons/views.svg";
import { Avatar } from "shared/ui/Avatar";
import Button from "shared/ui/Button/Button";
import Card from "shared/ui/Card/Card";
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";

type Props = {
  article: Article;
  view: ArticleView;
};

const ArticleListItem = ({ article, view }: Props) => {
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articlesDetailed + article.id);
  }, []);
  if (view == ArticleView.SMALL) {
    return (
      <div className={classNames("", {}, [cls[view]])}>
        <Card onOpen={onOpenArticle}>
          <div className={cls.imageWrapper}>
            <img src={article.img} />
            <Text text={article.createdAt} classnames={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            <div className={cls.infoWrapperHeader}>
              <Text text={article.type.join(", ")} classnames={cls.types} />
              <div className={cls.views}>
                <Text text={article.views} classnames={cls.viewsMargin} />
                <Icon Svg={EyeIcon} />
              </div>
            </div>
            <div>
              <Text text={article.title} />
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    const textBlock = article.blocks.find(
      (item) => item.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div className={classNames("", {}, [cls[view]])}>
        <Card>
          <div className={cls.infoWrapper}>
            <div className={cls.Header}>
              <div className={cls.iconWrapper}>
                <Avatar url={article.img} size={25} />
                <Text text={"123"} />
              </div>
              <Text text={article.createdAt} classnames={cls.dateMargin} />
            </div>
            <Text title={article.title} />
            <Text text={article.type.join(" ")} />
          </div>
          <div className={cls.imageWrapper}></div>
          <div className={cls.contentWrapper}>
            <ArticleTextBlockComponent block={textBlock} />
          </div>
          <div className={cls.viewsWrapper}>
            <Button onClick={onOpenArticle} isHover>
              Read more...
            </Button>
            <div>
              <Text text={article.views} />
              <Icon Svg={EyeIcon} />
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default ArticleListItem;
