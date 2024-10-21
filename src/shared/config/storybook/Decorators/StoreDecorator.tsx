import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { uiReducer } from '@/features/UI';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducersList } from '@/widgets/DynamicModuleLoader';
import { StoryFn } from '@storybook/react/*';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlesPage: articlesPageReducer,
    ui: uiReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: object) =>
        (StoryComponent: StoryFn) =>
            (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
