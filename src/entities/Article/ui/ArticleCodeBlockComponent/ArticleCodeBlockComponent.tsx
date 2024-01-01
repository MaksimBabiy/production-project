import { ArticleCodeBlock } from "entities/Article/model/types/article";
import React, { useCallback, useEffect, useState } from "react";
import cls from "./ArticleCodeBlockComponent.module.scss";
import Icon from "shared/ui/Icon/Icon";
import ArticlesList from "shared/assets/icons/ArticlesList.svg";
import { classNames } from "shared/lib/classNames";
type Props = {
  block: ArticleCodeBlock;
};

const ArticleCodeBlockComponent = ({ block }: Props) => {
  const [state, setState] = useState(false);

  const HandleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(block.code);
    setState(true);
  }, [block.code]);

  useEffect(() => {
    const timeout = setTimeout(() => setState(false), 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [state]);

  return (
    <div className={classNames(cls.codeBlockMain, { [cls.active]: state }, [])}>
      <pre className={cls.codeBlock}>
        <code>{block.code}</code>
      </pre>
      <Icon
        Svg={ArticlesList}
        classnames={cls.codeSvg}
        onClickHandle={HandleCopyCode}
      />
    </div>
  );
};

export default ArticleCodeBlockComponent;
