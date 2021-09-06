import {createSlice} from '@reduxjs/toolkit'
const eventExists = (events, event, att) => {
    return events.find(e => e.imdbID === event.imdbID)
}  
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addMovieToFavorites(state, action){
            let eventExists = state.find(e => (e.imdbID === action.payload.imdbID))
            if (eventExists) return state
            return [...state, action.payload]
        },
        deleteMovieFromFavorites(state, action){
            let id = action.payload
            return state.filter(movie => { return movie.imdbID !== id})
        }
    },
})


export const {addMovieToFavorites, deleteMovieFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
