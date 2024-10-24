import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        })]
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
        ThemeDecorator(Theme.DARK)
    ]
};

export const AuthNavbar: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        })]
};