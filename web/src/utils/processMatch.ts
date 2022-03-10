import { getNumberOfPiecesAbove, getNumberOfPiecesBelow, getNumberOfPiecesAhead, getNumberOfPiecesBehind } from "./";
import { gamePlayState, cellPosition } from "./interfaces";

const processMatch = (gameState: gamePlayState) => {
    const { cellClicked } = gameState;
    const cellPositionsWithAMatch: Array<cellPosition> = [];
    // get number of pieces ahead and behind
    const numberOfPiecesAhead = getNumberOfPiecesAhead(gameState);
    const numberOfPiecesBehind = getNumberOfPiecesBehind(gameState);
    const numberOfPiecesAbove = getNumberOfPiecesAbove(gameState);
    const numberOfPiecesBelow = getNumberOfPiecesBelow(gameState);

    // check if there is a vertical match
    const verticalMatch = numberOfPiecesAbove + numberOfPiecesBelow === 2? true : false;

    // check if there is a horizontal match
    const horizontalMatch = numberOfPiecesAhead + numberOfPiecesBehind === 2? true : false
    
    // if there is horizontal match, compile an array of the cell positions that match
    if (horizontalMatch) {
        for (let i = 1; i < numberOfPiecesAhead; i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X + i ,
                Y: cellClicked.Y
            });
        };
    
        for (let i = 1; i < numberOfPiecesBehind; i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X - i ,
                Y: cellClicked.Y
            });
        };
    }

    if (verticalMatch) {
        console.log(`number of pieces above: ${numberOfPiecesAbove}`);
        console.log(`Number of pieces below: ${numberOfPiecesBelow}`);
        for (let i = 1; i < numberOfPiecesAbove; i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y + 1
            });
        };
    
        for (let i = 1; i < numberOfPiecesBelow; i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y - 1
            });
        };
    }

    const isAMatch = horizontalMatch || verticalMatch? true : false;

    if (isAMatch) {
        cellPositionsWithAMatch.push(cellClicked);
    }

    return { isAMatch, cellPositionsWithAMatch }
};

export { processMatch };