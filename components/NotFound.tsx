import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
export default function NotFound(props){
    const {title} = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oops... {title}</Text>
            <Text style={styles.text}> Not Found</Text>
        </View>
    )
}
NotFound.propTypes = {
    title: PropTypes.string, 
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 50,
        color: 'gray',
    }
})