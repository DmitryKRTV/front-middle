import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

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
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    })]
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' }
    })]
};

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { isLoading: true }
    })]
};