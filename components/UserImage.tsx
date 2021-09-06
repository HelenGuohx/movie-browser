import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types'

export default function UserImage(props: any){
    const {image} = props
    return <Image source={image? {uri: image} : require('../assets/female_user.png')} style={{ width: 200, height: 200, borderRadius: 100}} />

}

UserImage.propTypes = {
    image: PropTypes.string
}