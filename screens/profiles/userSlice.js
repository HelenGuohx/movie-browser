import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Amy Cooper',
        email: 'amycooper@gmail.com',
        phone: '100-200-3000',
        image: ''
    },
    reducers: {
        userUpdated(state, action){
            const {username, email, phone, image} = action.payload
            return {...state, username, email, phone, image}
        },
    },
})


export const {userUpdated} = userSlice.actions;
export default userSlice.reducer;
