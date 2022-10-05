import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: UsersData,
    },
    reducers: {
        addUser: (state, action) => {
            //write code for User
        },
    },
});

export default userSlice.reducer;
