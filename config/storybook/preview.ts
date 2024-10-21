import type { Preview } from "@storybook/react";
import { Theme } from '../../src/app/providers/theme';
import { BrowserRouterDecorator } from '../../src/shared/config/storybook/Decorators/BrowserRouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/Decorators/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/Decorators/ThemeDecorator';

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
        SuspenseDecorator
    ],
};



export default preview;
