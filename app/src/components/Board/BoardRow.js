import React from 'react';
import { View } from 'react-native';
import styles from './Board.stylesheet';

const BoardRow = ({ children }) => {
    return (
        <View style = { styles.boardRow }>
            { children }
        </View>
    );
};

export default BoardRow;