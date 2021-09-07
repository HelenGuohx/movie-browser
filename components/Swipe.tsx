import React from 'react';
import { ViewComponent } from 'react-native';
import {Animated, StyleSheet, I18nManager, View, Text} from 'react-native'
import {Swipeable, RectButton} from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const defaultActionToColor = {'Save': '#ffab00', 'Delete': '#dd2c00', 'More': '#C8C7CD'}


interface actionType {
    title: string;
    color: string;
    event: (a: any) => void;

}


export default function Swipe(props) {
    
    const {actionButton, item} = props

    let _swipeable;

    const updateRef = (ref) => {
        _swipeable = ref
    }
    const close = () => {
        _swipeable.close()
    }

    const renderRightAction = (title: string, color: string, x: number, progress: any, event) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        })

        const handlePress = () => {
            close();
            event(item)
        }

        return (
            <Animated.View style={{flex: 1, transform: [{translateX: 0}]}} key={title}>
                <RectButton style={[styles.rightAction, {backgroundColor: color}]} onPress={handlePress}>
                    <Text style={styles.actionText}>{title}</Text>
                </RectButton>
            </Animated.View>
        )
    }


    const renderRightActions = (progress: any) => {
        let edgeUnit = 100
        let width = edgeUnit * actionButton.length
        const renderRight = actionButton.map((action: actionType, index: number) => {
                let {title, color, event} = action;
                color = color ? color: defaultActionToColor[title]
                return renderRightAction(title, color, edgeUnit * (index++), progress, event )
     
        })
        return (
        <View style={{ width: width, flexDirection: I18nManager.isRTL? 'row-reverse' : 'row' }}>
            {renderRight}
        </View>
    )}
        const { children } = props;

        return(
            <Swipeable ref={updateRef} renderRightActions={renderRightActions}>
                {children}
            </Swipeable>
        )
}

Swipe.propTypes = {
    actionButton: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string,
        event: PropTypes.func.isRequired
    })),
    item: PropTypes.any,
}

const styles = StyleSheet.create({
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
      },
      rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
})


