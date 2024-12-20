import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { Meta, StoryObj } from '@storybook/react/*';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
