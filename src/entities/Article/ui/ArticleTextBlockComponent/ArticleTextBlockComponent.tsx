import { ArticleTextBlock } from "entities/Article/model/types/article";
import React, { memo } from "react";
import Text from "shared/ui/Text/Text";
import cls from "./ArticleTextBlockComponent.module.scss";
type Props = {
  block: ArticleTextBlock;
};

const ArticleTextBlockComponent = memo(({ block }: Props) => {
  return (
    <div>
      {block.title && <Text title={block.title} />}
      {block.paragraphs.map((item) => (
        <Text classnames={cls.paragraphs} key={item} text={item} />
      ))}
    </div>
  );
});

export default ArticleTextBlockComponent;
