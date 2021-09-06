import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Platform, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons'; 
import UserImage from './UserImage';
import PropTypes from 'prop-types'

export default function UserImagePicker(props) {
  const {image, setImage} = props;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <UserImage image={image}/>
      <View style={[styles.edit, styles.button]}><Entypo name="camera" size={25} color="black" onPress={pickImage}/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  edit: {
    position: 'absolute',
    right: 100,
    bottom: 0,

  },
  button: {
    backgroundColor: '#FFA500',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
})


UserImagePicker.propTypes = {
  image: PropTypes.string,
  setImage: PropTypes.func.isRequired,
}
