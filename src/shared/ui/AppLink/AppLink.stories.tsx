import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import AppLink, { AppLinkTheme } from "./AppLink";

const meta = {
  title: "widget/AppLink",
  component: AppLink,
  args: { to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Test",
    theme: AppLinkTheme.PRIMARY,
    className: "",
  },
};
export const Dark: Story = {
  args: { children: "Test", theme: AppLinkTheme.SECONDARY, className: "" },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
