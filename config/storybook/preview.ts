import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProviders";
import "app/styles/index.scss";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator()],
};

export default preview;
