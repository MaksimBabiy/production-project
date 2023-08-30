import { Theme } from "app/providers/ThemeProviders";
import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
