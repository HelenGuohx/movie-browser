import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions,SafeAreaView, Button} from 'react-native'

export default class DetailScreen extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('item').Title
  })


  render(){
    const {navigation} = this.props
    const item = navigation.getParam('item')
    const {width, height} = Dimensions.get('screen')

    return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: item.Poster}} style={{width: width, height: height/2}}/>
      <View style={{margin: 10}}>
        {Object.entries(item).map(([key, value]) => (key !== 'Poster' && <Text key={key} style={styles.text} >{key}: {value}</Text>))}
      </View>
    </SafeAreaView>

    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 20,
    marginTop: 5,
    flexWrap: 'wrap',
    fontFamily: 'Times New Roman',
  }
})
