import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { StoryFn } from '@storybook/react/*';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
