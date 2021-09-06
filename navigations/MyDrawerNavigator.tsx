import React from 'react';
import {Image, Button, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'myHome',
      headerLeft: ({navigation}) => (  
        <Ionicons  
            style={{ paddingLeft: 10 }}  
            onPress={() => navigation.openDrawer()}  
            name="ios-setting"  
            size={30}  
        />  
    )  
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />
      );
    }
  }
  
    
class MyNotificationsScreen extends React.Component {
static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
    <Image
        source={require('../assets/icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
    />
    ),
};

render() {
    return (
    <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
    />
    );
}
}

const styles = StyleSheet.create({
icon: {
    width: 24,
    height: 24,
},
});

const MyDrawerNavigator = createDrawerNavigator({
MyHome: {
    screen: MyHomeScreen,
},
Notifications: {
    screen: MyNotificationsScreen,
},

});

export default MyDrawerNavigator