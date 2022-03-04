import {  StyleSheet } from 'react-native';
import { ColorCode } from '../../utils';

const cellWidthAndHeight = `calc(90vw / 5)`;

const styles = StyleSheet.create({
    boardWrapper: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        right: '5%',
    },

    boardRow: {
        flexDirection: 'row',
        width: '100%',
    },

    boardCellWrapper: {
        height: cellWidthAndHeight,
        width: cellWidthAndHeight,
        padding: 3,  
    },

    boardCell: {
        width: '100%',
        height: '100%',
        backgroundColor: ColorCode.CHARCOAL,
        borderRadius: 4,
        padding: 3,
    },

    boardPiece: {
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        backgroundColor: '#fff',
    }
});

export default styles;