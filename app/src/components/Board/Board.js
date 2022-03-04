import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './Board.stylesheet';
import BoardCell from './BoardCell';
import BoardRow from './BoardRow';

const Board = ({ 
    numberOfRows = 5, 
    numberOfColumns = 5 
}) => {

    const createBoard = (rows, columns) => {
        let boardArray = [];
    
        for (let i = 0; i < columns; i++) {
            let row = [];
    
            for (let j = 0; j < rows; j++) {
                const cell = <BoardCell cellPositionX={j} cellPositionY={i}/>
                row.push(cell);
            };
    
            const rowComponent = <BoardRow>{row}</BoardRow>;
            boardArray.push(rowComponent);
        };
    
        return boardArray;
    };
    

    const board = createBoard(numberOfRows, numberOfColumns);
    return (
        <View style = { styles.boardWrapper }>
            { board }
        </View>
    );
};

export { Board };