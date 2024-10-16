import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'test comment',
            user: {
                id: '2',
                username: 'test username'
            }
        }
    },
};