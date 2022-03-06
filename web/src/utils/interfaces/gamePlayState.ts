import { cellPosition } from './index';

interface gamePlayState {
    playerTurn : number,
    boardState: Array<Array<number>>,
    currentPlayer: number,
    cellClicked: cellPosition,
    allPiecesAddedToBoard: boolean,
};

export type { gamePlayState };