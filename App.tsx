import React from 'react';
import {StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import {HomeScreen, DetailScreen, SettingScreen, ProfileScreen, AboutMeScreen, FavoritesScreen} from './screens'
import { Provider } from 'react-redux';

import store from './store.js'

const HomeStack = createStackNavigator(
  {
    Movies: HomeScreen,
    Detail: DetailScreen,
  },{
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFA500',
      }
    }
  }

)

const aboutMeNavigator = createStackNavigator(
  {
    AboutMe: {
      screen: AboutMeScreen, 
    },
    Profile: ProfileScreen,
    Setting: SettingScreen,
    Favorites: FavoritesScreen,
    Detail: DetailScreen,
  },{
    initialRouteName: 'AboutMe',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFA500',
      }
    }
  }
)

const tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    AboutMe: aboutMeNavigator,
  },{
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state
        let iconName;
        if(routeName === 'Home'){
          iconName = focused? 'ios-home': 'ios-home-outline'
        }else{
          iconName = focused? 'person-circle': 'person-circle-outline'
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>
      },

    })
  }
)

const Container = createAppContainer(tabs)


export default function App() {
  return <Provider store={store}><Container /></Provider>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
