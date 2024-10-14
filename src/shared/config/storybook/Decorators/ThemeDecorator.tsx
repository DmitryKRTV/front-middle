import { Theme, ThemeProvider } from '@/app/providers/theme';
import { StoryFn } from '@storybook/react/*';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
