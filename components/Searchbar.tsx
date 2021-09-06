import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types'

export default function Searchbar(props){
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name={'ios-search'} size={20}/>
            <TextInput style={styles.input} value={props.searchValue} onChangeText={props.onSearch} placeholder={'Search title'}/>
        </View>
    )
}

Searchbar.propTypes = {
    searchValue: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    icon: {
        padding: 10
    },
    input: {
        flex: 1,
        fontSize: 20,

    }
})