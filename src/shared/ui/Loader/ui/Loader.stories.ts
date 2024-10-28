import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
