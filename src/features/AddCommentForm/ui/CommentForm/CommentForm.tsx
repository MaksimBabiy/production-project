import { memo, useEffect, useMemo, useState } from "react";
import cls from "./CommentForm.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { commentFormActions } from "features/AddCommentForm";
import { AppDispatch } from "app/providers/StoreProvider";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { getCommentText } from "features/AddCommentForm/model/selectors/getCommentText";

type Props = {
  onSubmitForm: (text: string) => void;
};

const CommentForm = ({ onSubmitForm }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const text = useSelector(getCommentText);
  const dispatch = useDispatch<AppDispatch>();
  const _onChangeHandler = () => {
    dispatch(commentFormActions.setText(inputValue));
  };

  useEffect(() => {
    _onChangeHandler();
  }, [debouncedValue]);
  const onHandleSubmit = () => {
    if (text) {
      onSubmitForm(text);
      setInputValue("");
    }
  };
  return (
    <div className={cls.commentFormBlock}>
      <input
        type="text"
        className={cls.commentForm}
        placeholder="Введите текст комментария"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button
        onClick={onHandleSubmit}
        isHover
        value={inputValue}
        theme={ThemeButton.OUTLINE}
        className={cls.commentFormButton}
      >
        Отправить
      </Button>
    </div>
  );
};

export default memo(CommentForm);
