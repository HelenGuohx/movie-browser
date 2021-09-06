import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import EditProfile from './EditProfile';
import PropTypes from 'prop-types';

const ProfileScreen = (props) => {

    return(
        <SafeAreaView>
          <EditProfile navigation={props.navigation}/>
        </SafeAreaView>
    )
}

export default ProfileScreen