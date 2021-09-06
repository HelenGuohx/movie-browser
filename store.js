import {configureStore, createStore} from '@reduxjs/toolkit';
import favoritesSlice from './screens/favorites/favoritesSlice';
import userReducer from './screens/profiles/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        favorites: favoritesSlice
    }
})