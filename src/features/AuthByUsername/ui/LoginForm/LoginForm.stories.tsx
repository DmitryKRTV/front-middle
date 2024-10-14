import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};