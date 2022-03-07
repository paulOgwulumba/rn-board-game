import { cellState, player } from './constants';
import { gamePlayState, cellPosition } from './interfaces';
import {
    cellContainsPlayerOnePiece, 
    cellContainsPlayerTwoPiece,
    isCellEmpty,
    isCellHorizontallyAligned,
    isCellVerticallyAligned,
} from './';

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
    if (isCellEmpty(stateOfCellClicked)){
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
 * @description This method checks if the cell that a player wants to add a piece in hand to
 * is valid. To pass validity check, the cell must be empty and it must not complete a 3-piece match or higher in
 * either the horizontal or vertical axis.
 * @param currentGameState 
 */
const isValidCellToAddPieceTo = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const {boardState, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not an empty cell, return 'false'.
    if (!isCellEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select an empty cell.'
        };
    }

    // if adding piece to cell will complete a horizontal match, return 'false'.
    if (isCellHorizontallyAligned(currentGameState)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a horizontal match.'
        };
    }

    // if adding piece to cell will complete a vertical match, return 'false'.
    if (isCellVerticallyAligned(currentGameState)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a vertical match.'
        }
    }

    return {
        isValid: true,
        message: 'Validity check passed.',
    }
};

export { isValidPieceToSelect, isValidCellToAddPieceTo};