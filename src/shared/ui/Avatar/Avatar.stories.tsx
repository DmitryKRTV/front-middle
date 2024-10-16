import { Avatar } from '@/shared/ui/Avatar/Avatar';
import AvatarImg from './storybook.jpg';

import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';

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