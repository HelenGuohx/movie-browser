import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

const ItemList = (props) => {

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => props.handlePress(item)}>
          <View style={styles.listItem}>
           <Image source={{uri: item.Poster}} style={{width:100, height:100}}/>
           <View style={{flex: 1, margin: 5}}>
             <Text style={styles.listItemTitle}>{item.Title}</Text>
             <Text style={styles.listItemDesc}>{item.Year}</Text>
           </View>
    
          </View>
       </TouchableOpacity>
      )
    return (
        <FlatList 
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.imdbID + index} 
      />
    )
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  handlePress: PropTypes.func,
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      borderTopWidth: 0.5,
      borderColor: 'gray',
    },
    listItemTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      flexWrap: 'wrap',
    },
    listItemDesc: {
      flexWrap: 'wrap',
    },
  
  
  }) 

  export default ItemList