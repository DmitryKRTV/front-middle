import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: '',
    },
    decorators: [StoreDecorator({})],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
