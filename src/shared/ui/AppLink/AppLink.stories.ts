import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { getRouteAbout, getRouteMain } from '@/shared/const/router';
import { Theme } from '@/shared/const/theme';
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
        to: getRouteMain(),
        children: "Main"
    },
  
};

export const SecondaryDark: Story = {
    args: {
        to: getRouteAbout(),
        children: "About"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};