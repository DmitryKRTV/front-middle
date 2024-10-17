import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';

// export const fetchProfileData = createAsyncThunk<
//     Profile,
//     void,
//     ThunkConfig<string>
//     >(
//         'profile/fetchProfileData',
//         async (_, thunkApi) => {
//             const { extra, rejectWithValue } = thunkApi;

//             try {
//                 const response = await extra.api.get<Profile>('/profile', {
//                     headers: {
//                         authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
//                     }
//                 });


//                 return response.data;
//             } catch (e) {
//                 console.log(e);
//                 return rejectWithValue('error');
//             }
//         },
//     );

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (profileId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Profile>(`/profile/${profileId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
