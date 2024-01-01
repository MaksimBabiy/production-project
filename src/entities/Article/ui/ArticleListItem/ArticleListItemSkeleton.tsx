import { ArticleView } from "entities/Article/model/types/article";
import React from "react";
import cls from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames";
import Card from "shared/ui/Card/Card";
import Skeleton from "shared/ui/Skeleton/Skeleton";
type Props = {
  view: ArticleView;
  classname?: string;
};

const ArticleListItemSkeleton = ({ view, classname }: Props) => {
  if (view == ArticleView.SMALL) {
    return (
      <div className={classNames("", {}, [cls[view]])}>
        <Card className={cls.SMALL}>
          <div className={cls.imageWrapper}>
            <Skeleton width={150} height={150} />
          </div>
          <div className={cls.infoWrapper}>
            <div className={cls.infoWrapperHeader}>
              <Skeleton width={100} height={16} />
              <div className={cls.views}>
                <Skeleton width={50} height={16} />
              </div>
            </div>
            <div>
              <Skeleton width={100} height={16} />
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={classNames("asd", {}, [cls[view]])}>
        <Card>
          <div className={cls.infoWrapper}>
            <div className={cls.Header}>
              <div className={cls.iconWrapper}>
                <Skeleton width={25} height={25} />
                <Skeleton width={100} height={25} />
              </div>
            </div>
            <Skeleton width={100} height={25} />
            <Skeleton width={100} height={25} />
          </div>
          <div className={cls.imageWrapper}></div>
          <div className={cls.contentWrapper}>
            <Skeleton width={300} height={150} />
          </div>
          <div className={cls.viewsWrapper}>
            <Skeleton width={150} height={15} />
            <div>
              <Skeleton width={100} height={15} />
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default ArticleListItemSkeleton;
