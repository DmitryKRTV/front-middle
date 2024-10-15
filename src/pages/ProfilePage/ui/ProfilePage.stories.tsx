import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};