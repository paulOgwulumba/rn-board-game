import { gamePlayState } from "./interfaces";
import { getNumberOfPiecesAbove, getNumberOfPiecesBelow } from ".";

/**
 * @description This method checks if placing a piece in a cell makes it vertically align with at least three other identical pieces.
 * @param currentGameState The current game state.
 * @returns True if horizontal alignment is observed, false if it is not.
 */
 const isCellVerticallyAligned = (currentGameState: gamePlayState): boolean => {
    const numberOfPiecesAhead = getNumberOfPiecesAbove(currentGameState);
    const numberOfPiecesBehind = getNumberOfPiecesBelow(currentGameState);
    return numberOfPiecesAhead + numberOfPiecesBehind > 1? true : false;
};

export { isCellVerticallyAligned };