import React from 'react';
import { View } from "react-native"
import {Picker} from '@react-native-picker/picker'
import PropTypes from 'prop-types'

function GenrePicker(props){
    const {selectedValue, handleSeletedValue} = props

    return (
        <View>
            <Picker selectedValue={selectedValue} onValueChange={handleSeletedValue} mode={'dropdown'}>
                <Picker.Item label='All' value='all' />
                <Picker.Item label='Movie' value='movie' />
                <Picker.Item label='Series' value='series' />
                <Picker.Item label='Episode' value='episode' />
            </Picker>
            
        </View>
    )
}

GenrePicker.propTypes = {
    selectedValue: PropTypes.string,
    handleSeletedValue: PropTypes.func
}
export default GenrePicker