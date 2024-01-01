import { createPortal } from "react-dom";
import { Notification } from "widgets/Notification";

export const useNotification = (text: string) => {
  createPortal(<Notification text={text} />, document.body);
};
