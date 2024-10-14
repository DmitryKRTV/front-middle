import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};

export const SecondaryDark: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};