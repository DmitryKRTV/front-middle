import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        view: ArticleView.SMALL
    },
};
