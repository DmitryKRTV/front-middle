import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Avatar/Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args:  {
        size: 50,
        src: AvatarImg,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};