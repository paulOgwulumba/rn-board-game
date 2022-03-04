import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Board } from '../components';
import { ColorCode } from '../utils';

const GameScreen = () => {
    return (
        <View style = { styles.gameWrapper }>
            <Board numberOfColumns={5} numberOfRows={5}/>
        </View>
    );
};

const styles = StyleSheet.create({
    gameWrapper: {
        backgroundColor: ColorCode.DARK_GRAY,
        height: '100%',
    }
})

export { GameScreen };