import React, { memo } from "react";
import cls from "./CommentBlock.module.scss";
import { Comment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar";
import Text from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getCommentsIsLoading } from "entities/Comment/model/selectors/commentsSelector";
type Props = {
  comment: Comment;
};

const CommentBlock = memo(({ comment }: Props) => {
  const isLoading = useSelector(getCommentsIsLoading);
  if (isLoading) {
    return (
      <div className={cls.comment}>
        <div className={cls.commentInfo}>
          <Skeleton
            width={30}
            height={30}
            border={"50%"}
            classname={cls.commentAvatar}
            margin={"10px"}
          />
          <Skeleton width={100} height={15} margin={"10px"} />
        </div>
        <Skeleton width={"100%"} height={30} margin={"10px"} />
      </div>
    );
  }
  return (
    <div className={cls.comment}>
      <div className={cls.commentInfo}>
        {comment.user.avatar ? (
          <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.profile + comment.user.id}
          >
            <Avatar
              size={30}
              url={comment.user.avatar}
              classnames={cls.commentAvatar}
            />
          </AppLink>
        ) : null}
        <Text text={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});

export default CommentBlock;
