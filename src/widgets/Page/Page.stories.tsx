import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
    title: 'shared/Page',
    component: Page,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { children: <div>123</div> },
};

export const SecondaryDark: Story = {
    args: { children: <div>123</div> },
    decorators: [ThemeDecorator(Theme.DARK)],
};
