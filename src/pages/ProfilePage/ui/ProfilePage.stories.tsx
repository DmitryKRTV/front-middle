import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/Decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: '',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};

export const SecondaryDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};
