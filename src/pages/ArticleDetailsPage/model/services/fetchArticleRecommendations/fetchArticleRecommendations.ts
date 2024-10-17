import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Article } from '@/entities/Article/model/types/article';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articleDetailsPage/fetchArticleRecommendations',
        async (props, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _limit: 4,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );