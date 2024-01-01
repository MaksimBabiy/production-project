import { AppDispatch } from "app/providers/StoreProvider";
import { ArticleDetail } from "entities/Article";
import {
  CommentListBlock,
  commentReducer,
  fetchCommentsById,
  getArticleComments,
  getCommentsIsLoading,
} from "entities/Comment";
import { commentFormReducer } from "features/AddCommentForm";
import { getCommentText } from "features/AddCommentForm/model/selectors/getCommentText";
import { addCommentForArticle } from "pages/ArticleDetailedPage/model/services/addCommentForArticle";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader } from "shared/lib/components";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import Text from "shared/ui/Text/Text";

type Props = {};

const ArticleDetailedPage = (props: Props) => {
  const { id } = useParams();
  if (!id) {
    return <div>Article not found</div>;
  }
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getCommentsIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  const text = useSelector(getCommentText);
  const reducerList: ReducersList = {
    comments: commentReducer,
    addCommentForm: commentFormReducer,
  };
  useEffect(() => {
    dispatch(fetchCommentsById(id)).then(({ payload }) => console.log(payload));
  }, []);
  const onSubmitForm = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, []);
  return (
    <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
      <div>
        <ArticleDetail id={id} />
        <Text title="Comments" />
        <CommentListBlock
          onSubmitForm={onSubmitForm}
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailedPage);
