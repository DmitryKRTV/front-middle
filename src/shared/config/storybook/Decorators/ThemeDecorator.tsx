// eslint-disable-next-line krtv-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme';
import { Theme } from '@/shared/const/theme';
import { StoryFn } from '@storybook/react/*';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
