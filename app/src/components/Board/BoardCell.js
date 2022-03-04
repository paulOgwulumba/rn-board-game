import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import styles from './Board.stylesheet';

const BoardCell = ({ cellPositionX = 0, cellPositionY = 0 }) => {
    const [containsPiece, setContainsPiece] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
        <View style = { styles.boardCellWrapper }>
            <Pressable 
                style = { styles.boardCell } 
                onPress = { () => setContainsPiece(!containsPiece) }                   
            >
                {
                    containsPiece? <View style = {styles.boardPiece}></View> : null
                }
            </Pressable>
        </View>
    );
};

export default BoardCell;