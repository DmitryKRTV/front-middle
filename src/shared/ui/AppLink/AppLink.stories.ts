import { Theme } from '@/app/providers/theme';
import { RoutePath } from '@/shared/config/routeConfig/routerConfig';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        to: RoutePath.main,
        children: "Main"
    },
  
};

export const SecondaryDark: Story = {
    args: {
        to: RoutePath.about,
        children: "About"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};