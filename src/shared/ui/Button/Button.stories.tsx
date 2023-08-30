import type { Meta, StoryObj } from "@storybook/react";
import Button, { ThemeButton } from "./Button";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Text",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutLine: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutLineDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};
OutLineDark.decorators = [ThemeDecorator(Theme.DARK)];
