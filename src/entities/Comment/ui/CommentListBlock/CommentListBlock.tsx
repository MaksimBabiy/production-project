import { Comment } from "entities/Comment/model/types/comment";
import { memo, useCallback } from "react";
import CommentBlock from "../CommentBlock/CommentBlock";
import { CommentForm } from "features/AddCommentForm";

type Props = {
  comments?: Comment[];
  isLoading?: boolean;
  onSubmitForm: (text: string) => void;
};

export const CommentListBlock = memo(({ comments, onSubmitForm }: Props) => {
  const renderComments = useCallback((comment: Comment) => {
    return <CommentBlock comment={comment} key={comment.id} />;
  }, []);

  return (
    <>
      <CommentForm onSubmitForm={onSubmitForm} />
      <div>{comments && comments.map(renderComments)}</div>
    </>
  );
});
