import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import UserImage from '../../components/UserImage';

const ViewProfile = () => {
    const user = useSelector(state => state.user)

    return (
        <View style={styles.profile}>
        <UserImage image={user.image}/>
        <View style={styles.profileItem}>
            <Text style={styles.profileTitle}>{user.username}</Text>
        </View>
        <View style={styles.profileItem}>
            <MaterialIcons name="phone" size={24} color="black" />
            <Text>{user.phone}</Text>
        </View>
        <View style={styles.profileItem}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text>{user.email}</Text>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    profile:{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileItem: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2,
    },
})

export default ViewProfile