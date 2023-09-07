import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cls from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames";
import Portal from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProviders";
type Props = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};
const ANIMATION_DELAY = 300;

const Modal = (props: Props) => {
  const { children, isOpen, onClose } = props;
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useTheme();

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [theme])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
