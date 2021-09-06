import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { withOrientation } from 'react-navigation';
import PropTypes from 'prop-types'
let buttonColor = '#FFA500'

export default function ButtonGroup(props){
    const {data, handleButtonGroup, color} = props
    const [selectedValue, setSeletedValue] = useState('all');
    buttonColor = color ? color: buttonColor; 

    const styles = StyleSheet.create({
        group: {
            flexDirection: 'row',
            marginTop: 5,
        },
        button: {
            flex: 1,
            alignItems: 'center',
            margin: 2,
            padding: 10,
            borderRadius: 50, 
            borderWidth: 0.5,
            borderColor: buttonColor,
        },
        buttonHightlight: {
            backgroundColor: buttonColor,
        },
        text: {
            color: '#fff',
            fontWeight: 'bold',
        }
    
    })
    return (
        <View style={styles.group}> 
            {data.map((element: string) => {
                return (
                <TouchableHighlight 
                    style={selectedValue === element? [styles.buttonHightlight, styles.button] : styles.button} 
                    onPress={() => {handleButtonGroup(element), setSeletedValue(element)}}
                    key={element}
                    >
                    <Text style={selectedValue === element && styles.text}>{element}</Text>
                </TouchableHighlight>
                )
            })}
        </View>
    )
}

ButtonGroup.propTypes = {
    data: PropTypes.array.isRequired,
    handleButtonGroup: PropTypes.func.isRequired, 
    color: PropTypes.string
}
