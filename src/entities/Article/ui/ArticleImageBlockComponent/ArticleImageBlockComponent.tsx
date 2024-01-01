import { ArticleImageBlock } from "entities/Article/model/types/article";
import Text, { TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlockComponent.module.scss";
type Props = {
  block: ArticleImageBlock;
};

const ArticleImageBlockComponent = ({ block }: Props) => {
  return (
    <div className={cls.imageBlock}>
      <img src={block.src} className={cls.articleImage} />
      <Text text={block.title} align={TextAlign.CENTER} />
    </div>
  );
};

export default ArticleImageBlockComponent;
