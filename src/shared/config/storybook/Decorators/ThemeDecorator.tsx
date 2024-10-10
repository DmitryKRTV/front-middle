import { Theme } from '@/app/providers/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
