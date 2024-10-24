import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: "Primary"
    },
};

export const Clear: Story = {
    args: {
        children: "Clear",
        theme: ButtonTheme.CLEAR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const ClearDark: Story = {
    args: {
        children: "Clear",
        theme: ButtonTheme.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outlined: Story = {
    args: {
        children: "OUTLINE",
        theme: ButtonTheme.OUTLINE
    },
};