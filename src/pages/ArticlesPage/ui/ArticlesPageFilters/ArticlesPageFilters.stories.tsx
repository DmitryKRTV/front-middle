import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({}),]
};