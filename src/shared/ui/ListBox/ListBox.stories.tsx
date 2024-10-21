import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {onChange: ()=>{}},
};
