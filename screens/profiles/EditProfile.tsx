import React , {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import UserImagePicker from '../../components/UserImagePicker';
import PropTypes from 'prop-types';
import {useSelector, useDispatch } from 'react-redux'
import { userUpdated } from './userSlice';

const EditProfile = ({navigation}) => {

    const user = useSelector(state => state.user)
    const dispatch= useDispatch()
    const [image, setImage] = useState(user.image)
    const [username, onChangeUsername] = useState(user.username);
    const [email, onChangeEmail] = useState(user.email);
    const [phone, onChangePhone] = useState(user.phone);
    console.log(username, email, phone)

    const updateProfile = () => {
      if(username && email && phone){
        dispatch(userUpdated({username, email, phone, image}))

        navigation.navigate('AboutMe') 
      }
      
    }



    return (
        <KeyboardAvoidingView style={styles.container}>
            <UserImagePicker image={image} setImage={setImage}/>
            <KeyboardAvoidingView style={styles.textBox}>
                <Text style={styles.text}>Username</Text>
                <TextInput style={styles.input} value={username} onChangeText={onChangeUsername}/>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} autoCapitalize={'none'} value={email} onChangeText={onChangeEmail}/>
                <Text style={styles.text}>Phone</Text>
                <TextInput style={styles.input} value={phone} onChangeText={onChangePhone} keyboardType='numeric' placeholder='(333)1112222'/>
                <View style={styles.wraper}>
                    <TouchableOpacity onPress={updateProfile} style={styles.button}><Text style={styles.bottonText}>Save</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView> 
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    textBox: {
        margin: 20,
    },
    text: {
        color: 'gray',
        marginTop: 10,
        fontSize: 20,
    },
    input: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    },
    wraper: {
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        marginTop: 20,
        padding: 10,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#FFA500',
        justifyContent:'center',
        alignItems: 'center',

    },
    bottonText: {
        fontSize: 20,
    },
})


export default EditProfile