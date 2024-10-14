import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { StoryFn } from '@storybook/react/*';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: object) =>
        (StoryComponent: StoryFn) =>
            (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...{}, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
