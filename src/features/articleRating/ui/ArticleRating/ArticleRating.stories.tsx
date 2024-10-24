import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: '',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        articleId: 'story-a-id-1'
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    }
};


export const WithoutRate: Story = {
    args: {
        articleId: 'story-a-id-2'
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [ ],
            },
        ],
    }
};
