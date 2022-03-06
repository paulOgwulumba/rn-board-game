import { cellState, player } from './constants';
import { gamePlayState } from './interfaces';

interface gamePlayCheckReturnValue {
    isValid: boolean,
    message: string,
};

/**
 * @description This method checks if a piece selected by a player is a valid one to select.
 * A player cannot select a cell containing the piece of the other player. A player cannot select
 * an empty cell too.
 * @param currentGameState Object containing the current game state.
 * @returns {Boolean} True if the cell can be selected and false if it cannot.
 */
const isValidPieceToSelect = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const { currentPlayer, boardState, playerTurn, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not this player's turn to play, return 'false';
    if (currentPlayer !== playerTurn) {
        return {
            isValid: false,
            message: "It is not your turn to play, please hold on.",
        }
    };

    // If it is an empty cell, return 'false'.
    if (cellIsEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select your piece, there is no piece on this cell.'
        }
    }

    switch (currentGameState.currentPlayer) {
        case player.FIRST_PLAYER: {
            if (cellContainsPlayerTwoPiece(stateOfCellClicked)) {
                return {
                    isValid: false,
                    message: "You cannot select your opponent's piece."
                };
            }
            break;
        }
        case player.SECOND_PLAYER: {
            if (cellContainsPlayerOnePiece(stateOfCellClicked))  {
                return {
                    isValid: false,
                    message: "You cannot select your opponent's piece."
                }
            }
            break;
        }
    }

    return {
        isValid: true,
        message: 'Piece is valid to select.',
    }
};

/**
 * @description This method checks if the state of a cell signifies that it contains a piece of 
 * the second player.
 * @param stateOfCell State of the cell to be checked
 * @returns {Boolean} True if the cell contains a piece of the second player and false if it does not.
 */
const cellContainsPlayerTwoPiece = (stateOfCell: number) => {
    if (stateOfCell === cellState.CELL_CONTAINING_PIECE_PLAYER_2) return true;
    if (stateOfCell === cellState.CELL_MATCHED_PLAYER_2) return true;
    if (stateOfCell === cellState.CELL_SELECTED_PLAYER_2) return true;

    return false;
}

/**
 * @description This method checks if the state of a cell signifies that it contains a piece of 
 * the first player.
 * @param stateOfCell State of the cell to be checked
 * @returns {Boolean} True if the cell contains a piece of the first player and false if it does not.
 */
 const cellContainsPlayerOnePiece = (stateOfCell: number) => {
  if (stateOfCell === cellState.CELL_CONTAINING_PIECE_PLAYER_1) return true;
  if (stateOfCell === cellState.CELL_MATCHED_PLAYER_1) return true;
  if (stateOfCell === cellState.CELL_SELECTED_PLAYER_1) return true;

  return false;
}

/**
 * @description This method checks if a cell is empty or not.
 * @param stateOfCell The state of the cell to be checked.
 * @returns True if the cell is empty and false if it contains a piece.
 */
const cellIsEmpty = (stateOfCell: number) => {
    if (stateOfCell === cellState.CELL_EMPTY) return true;
    else return false;
}

/**
 * @description This method checks if the cell that a player wants to add a piece in hand to
 * is valid. To pass validity check, the cell must be empty and it must not complete a 3-piece match or higher in
 * either the horizontal or vertical axis.
 * @param currentGameState 
 */
const isValidCellToAddPieceTo = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const { currentPlayer, boardState, playerTurn, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not an empty cell, return 'false'.
    if (!cellIsEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select an empty cell.'
        }
    }

    return {
        isValid: true,
        message: 'Validity check passed.',
    }
};

const isCellHorizontallyAligned = (currentGameState: gamePlayState): boolean => {
    const { currentPlayer, boardState, playerTurn, cellClicked } = currentGameState;
    
    return true;
}

export { isValidPieceToSelect, isValidCellToAddPieceTo, isCellHorizontallyAligned };