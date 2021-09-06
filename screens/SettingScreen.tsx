import React from 'react'

import {Text, View, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
export default class SettingScreen extends React.Component {
    static navigationOption = {
        title: 'Setting',
        headerTitle: 'Setting',
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#FFA500'
        },
        drawerLabel: 'Setting',
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Setting here</Text>
             </View>
        )
    }


}


