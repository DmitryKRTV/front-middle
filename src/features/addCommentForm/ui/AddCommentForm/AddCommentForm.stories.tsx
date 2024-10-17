import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {onSendComment: action('onSendComment'),},
    decorators: [StoreDecorator({}),]
};

