import React, { Component } from 'react';
import { StyleSheet, Text, View, I18nManager, Image } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';
import Swipe from './Swipe'
import PropTypes from 'prop-types'

export default function SwipeList(props){
    const Row = ({item}) => (
            <RectButton style={styles.rectButton} onPress={() => props.handlePress(item)}>
                 <View style={styles.listItem}>
                <Image source={{uri: item.Poster}} style={{width:100, height:100}}/>
                <View style={{flex: 1, margin: 5}}>
                    <Text style={styles.listItemTitle}>{item.Title}</Text>
                    <Text style={styles.listItemDesc}>{item.Year}</Text>
                </View>
                </View>
            </RectButton>
        

    )
    const SwipeableRow = ({item}) => {
        return (
            <Swipe actionButton={props.actionButton} item={item}>
                <Row item={item}/>
            </Swipe>
        )
    }

    return(
        <FlatList 
            data={props.data}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            renderItem={({item}) => <SwipeableRow item={item}/>}
            keyExtractor={(_, index) => `id_${index}`}
        />
    )
}
SwipeList.propTypes = {
  data: PropTypes.array.isRequired,
  handlePress: PropTypes.func,
  actionButton: PropTypes.object,
}

const styles = StyleSheet.create({
    rectButton: {
      flex: 1,
      height: 80,
      paddingVertical: 10,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    separator: {
      backgroundColor: 'rgb(200, 199, 204)',
      height: StyleSheet.hairlineWidth,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        // padding: 5,
        // borderTopWidth: 0.5,
        // borderColor: 'gray',
      },
      listItemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
      },
      listItemDesc: {
        flexWrap: 'wrap',
      },
       
  });
  

