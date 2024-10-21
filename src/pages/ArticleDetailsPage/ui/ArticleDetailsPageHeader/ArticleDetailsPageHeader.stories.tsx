import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({}),]
};
