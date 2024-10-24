import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../entities/Article/model/consts/articleConsts';
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
