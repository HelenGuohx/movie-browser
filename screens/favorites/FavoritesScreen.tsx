import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SwipeList} from '../../components'
import {deleteMovieFromFavorites} from './favoritesSlice'



const FavoriteScreen = (props) => {
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    
    const actionButton = [{
        title: 'Delete',
        event: (item) => dispatch(deleteMovieFromFavorites(item.imdbID))
        },
    ]

    return (

        <SwipeList data={favorites} 
            handlePress={(item) => props.navigation.navigate('Detail', {item})} 
            actionButton={actionButton}
        />

    )
}

export default FavoriteScreen