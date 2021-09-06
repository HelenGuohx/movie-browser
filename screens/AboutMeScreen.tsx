import React from 'react';

import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import {Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import ViewProfile from './profiles/ViewProfile';

class AboutMeScreen extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.profile}>
                    <ViewProfile />
                    <AntDesign style={styles.editIcon} name="edit" size={24} color="black" onPress={() => this.props.navigation.navigate('Profile')}/>
                </View>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Favorites')}>
                        <MaterialIcons name="favorite-border" size={24} color="black" />
                        <Text style={styles.text}>Favorite</Text>
                        <MaterialIcons style={styles.nextIcon} name="navigate-next" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} disabled={true} onPress={() => this.props.navigation.navigate('History')}>
                        <MaterialIcons name="history" size={24} color="rgba(0,0,0,0.1)" />
                        <Text style={[styles.text, styles.disabled]}>History</Text>
                        <MaterialIcons style={styles.nextIcon} name="navigate-next" size={24} color="rgba(0,0,0,0.1)" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Setting')}>
                        <Ionicons name="settings-outline" size={24} color="black"/>
                        <Text style={styles.text}>Setting</Text>
                        <MaterialIcons style={styles.nextIcon} name="navigate-next" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    profile: {
        backgroundColor: '#FFA500',
    },
    editIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    list: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        
    },

    text: {
        marginLeft: 20,
        fontSize: 20,
    },
    nextIcon: {
        position: 'absolute', 
        right: 0,
    }, 
    disabled: {
        color: 'rgba(0,0,0,0.1)',
    }

})
export default AboutMeScreen