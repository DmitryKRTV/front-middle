import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import { BrowserRouterDecorator } from '../../src/shared/config/storybook/Decorators/BrowserRouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/Decorators/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        BrowserRouterDecorator,
        SuspenseDecorator,
        withThemeByClassName({
            themes: {
                light: Theme.LIGHT,
                dark: Theme.DARK,
                orange: Theme.ORANGE
            },
            defaultTheme: 'light',
        }),
    ],
};



export default preview;
