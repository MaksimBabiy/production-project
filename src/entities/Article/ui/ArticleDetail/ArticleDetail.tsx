import { AppDispatch } from "app/providers/StoreProvider";
import { articleReducer, fetchArticleData } from "entities/Article";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./ArticleDetail.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar";
import ViewsSvg from "shared/assets/icons/views.svg";
import DateSvg from "shared/assets/icons/date.svg";
import {
  ArticleBlock,
  ArticleBlockType,
} from "entities/Article/model/types/article";
import Icon from "shared/ui/Icon/Icon";
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import ArticleCodeBlockComponent from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import ArticleImageBlockComponent from "../ArticleImageBlockComponent/ArticleImageBlockComponent";

type Props = {
  id: string;
};

export const ArticleDetail = memo(({ id }: Props) => {
  const dispath = useDispatch<AppDispatch>();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const isError = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);
  let content;
  const reducers: ReducersList = {
    article: articleReducer,
  };

  const renderBlock = useCallback((block: ArticleBlock) => {
    if (block.type == ArticleBlockType.TEXT) {
      return <ArticleTextBlockComponent block={block} key={block.id} />;
    } else if (block.type == ArticleBlockType.CODE) {
      return <ArticleCodeBlockComponent block={block} key={block.id} />;
    } else {
      return <ArticleImageBlockComponent block={block} key={block.id} />;
    }
  }, []);

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          classname={cls.avatar}
          width={200}
          height={200}
          border={"50%"}
        />
        <Skeleton width={300} height={24} />
        <Skeleton width={600} height={24} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
      </div>
    );
  } else if (isError) {
    content = (
      <Text
        text="Something wents wrong"
        theme={TextTheme.ERROR}
        title={"error"}
        align={TextAlign.CENTER}
      />
    );
  } else {
    if (data) {
      content = (
        <>
          <div className={cls.avatarWrapper}>
            <Avatar classnames={cls.avatar} url={data.img} size={200} />
          </div>
          <Text title={data.title} text={data.subtitle} />
          <div className={cls.viewsBlock}>
            <Icon Svg={ViewsSvg} classnames={cls.icon} />
            <Text text={data.views} />
          </div>
          <div className={cls.viewsBlock}>
            <Icon Svg={DateSvg} classnames={cls.icon} />
            <Text text={data.createdAt} />
          </div>
          {data.blocks.map(renderBlock)}
        </>
      );
    }
  }

  useEffect(() => {
    dispath(fetchArticleData(id));
  }, [dispath, id]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.article, {}, [])}>{content}</div>
    </DynamicModuleLoader>
  );
});
