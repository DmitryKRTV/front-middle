import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta = {
    title: 'pages/ArticleInfiniteList',
    component: ArticleInfiniteList,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({}),]
};
