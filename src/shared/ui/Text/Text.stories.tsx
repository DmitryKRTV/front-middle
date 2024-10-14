import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: []
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: []
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
    decorators: []
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};