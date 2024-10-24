import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: '',
    },
    decorators: [StoreDecorator({})],
    argTypes: {},
    args: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: {
            description: 'test',
            id: '1',
            title: 'title'
        }
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                ],
            },
        ],
    }
};
