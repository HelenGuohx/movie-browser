import React from "react"
import {View, Alert, Button} from 'react-native'
import { AntDesign} from "@expo/vector-icons"
import { useDispatch } from "react-redux"
import { addMovieToFavorites } from "./favoritesSlice"
import PropTypes from 'prop-types'

const SaveButton = (props) => {
    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(addMovieToFavorites(props.item))
        Alert.alert(props.title)

    }
    return (
        <View style={{justifyContent: 'center', 'alignItems': 'center'}}>
        <Button title={props.title} onPress={handlePress}/>
        </View>
    )
}
SaveButton.propTypes = {
  item: PropTypes.object,
  title: PropTypes.string,
}
export default SaveButton