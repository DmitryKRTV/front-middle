import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { AboutPage } from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: '',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};