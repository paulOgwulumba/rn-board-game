import React, { useState } from 'react';
import './App.css';
import { Board } from './components';
import { 
    unpackBoardState, 
    stringifyBoardState, 
    isValidCellToAddPieceTo, 
    isValidCellToMovePieceTo,
    isValidPieceToAttack,
    isValidPieceToSelect,
    processMatch,
    processHorizontalMatch,
    processVerticalMatch,
} from './utils';
import { cellPosition, gamePlayState } from './utils/interfaces';
import { player, cellState } from './utils/constants';

const initialBoardState = `00000_00000_00000_00000_00000`;

function App() {
  const numberOfPieces = 6;
  const [boardState, setBoardState] = useState(initialBoardState);
  const [playerTurn, setPlayerTurn] = useState(player.FIRST_PLAYER);
  const [currentPlayer, setCurrentPlayer] = useState(player.FIRST_PLAYER);
  const [allPiecesAddedToBoard, setAllPiecesAddedToBoard] = useState(false);
  const [playerOnePiecesInHand, setPlayerOnePiecesInHand] = useState(numberOfPieces);
  const [playerOnePiecesLeft, setPlayerOnePiecesLeft] = useState(numberOfPieces);
  const [playerTwoPiecesInHand, setPlayerTwoPiecesInHand] = useState(numberOfPieces);
  const [playerTwoPiecesLeft, setPlayerTwoPiecesLeft] = useState(numberOfPieces);
  const [isPlayerToPlayAgain, setIsPlayerToplayAgain] = useState(false);
  const [isPlayerToAttackOpponentPieces, setIsPlayerToAttackOpponentPieces] = useState(false);
  const [numberOfAttacksLeft, setNumberOfAttacksLeft] = useState(0);
  const [cellOfSelectedPiece, setCellOfselectedPiece] = useState({ X:0, Y:0 });
  
  const handleClick = (position: cellPosition) => {
      const unpackedBoardState = unpackBoardState(boardState);
      const gamePlayState: gamePlayState = {
          playerTurn, 
          boardState: unpackedBoardState,
          currentPlayer,
          cellClicked: position,
          allPiecesAddedToBoard,
          cellOfSelectedPiece,
      };

      if (!allPiecesAddedToBoard) {

          // check validity of player's move
          const cellAdditionValidityStatus = isValidCellToAddPieceTo(gamePlayState);
          if (cellAdditionValidityStatus.isValid) {
              // add piece to the selected cell
              unpackedBoardState[position.Y][position.X] = 
                playerTurn === player.FIRST_PLAYER? 
                  cellState.CELL_CONTAINING_PIECE_PLAYER_1
                  : 
                  cellState.CELL_CONTAINING_PIECE_PLAYER_2;
              setBoardState(stringifyBoardState(unpackedBoardState));

              // If player two just played the last piece in their hand, signify that all pieces have been added to the board.
              if (playerTurn === player.SECOND_PLAYER && playerTwoPiecesInHand === 1) {
                  setAllPiecesAddedToBoard(true);
              }

              // reduce number of pieces held by the player that just played
              playerTurn === player.FIRST_PLAYER? 
                setPlayerOnePiecesInHand(playerOnePiecesInHand - 1) 
                :
                setPlayerTwoPiecesInHand(playerTwoPiecesInHand - 1)
              
              // toggle player's turn
              setPlayerTurn(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);  
          } else {
              alert(cellAdditionValidityStatus.message);
          }
      }
      else {
          // check if current player selected a piece before
          if (isPlayerToPlayAgain) {
              // If previously selected piece is clicked on again, deselect it.
              if (JSON.stringify(cellOfSelectedPiece) === JSON.stringify(position)) {   
                  // change the state of the selected cell from selected to normal.
                  unpackedBoardState[position.Y][position.X] = 
                  playerTurn === player.FIRST_PLAYER? 
                      cellState.CELL_CONTAINING_PIECE_PLAYER_1
                      : 
                      cellState.CELL_CONTAINING_PIECE_PLAYER_2
                  setBoardState(stringifyBoardState(unpackedBoardState));
                  // signify that double play has ended
                  setIsPlayerToplayAgain(false);
                  return;
              }

              const cellMovingValidityStatus = isValidCellToMovePieceTo(gamePlayState);

              if (cellMovingValidityStatus.isValid) {
                  // add piece to the selected cell
                  unpackedBoardState[position.Y][position.X] = 
                  playerTurn === player.FIRST_PLAYER? 
                      cellState.CELL_CONTAINING_PIECE_PLAYER_1
                      : 
                      cellState.CELL_CONTAINING_PIECE_PLAYER_2;
                  
                  // remove piece from the previous cell
                  unpackedBoardState[cellOfSelectedPiece.Y][cellOfSelectedPiece.X] = cellState.CELL_EMPTY;
                  

                  // check if there is a match
                  const matchHandling = processMatch(gamePlayState);
                  if (matchHandling.isAMatch) {
                        matchHandling.cellPositionsWithAMatch.forEach((cellPositionWithAMatch) => {
                            unpackedBoardState[cellPositionWithAMatch.Y][cellPositionWithAMatch.X] = 
                                playerTurn === player.FIRST_PLAYER? 
                                    cellState.CELL_MATCHED_PLAYER_1 
                                    :
                                    cellState.CELL_MATCHED_PLAYER_2
                        });

                        // Signify that player can attack opponent's pieces.
                        setNumberOfAttacksLeft(matchHandling.cellPositionsWithAMatch.length> 3? 2 : 1);
                        setIsPlayerToAttackOpponentPieces(true);
                        setIsPlayerToplayAgain(false);
                  } 
                  else {
                        // toggle player's turn
                        setPlayerTurn(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER); 
                        setCurrentPlayer(currentPlayer === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);
                        // signify that double play has ended
                        setIsPlayerToplayAgain(false);
                  }  
                  setBoardState(stringifyBoardState(unpackedBoardState));
              } 
              else {
                  alert(cellMovingValidityStatus.message);
              }
          }
          else if (isPlayerToAttackOpponentPieces) {
                const pieceAttackValidityStatus = isValidPieceToAttack(gamePlayState);
                if (pieceAttackValidityStatus.isValid) {
                    //Remove selected piece from board
                    unpackedBoardState[position.Y][position.X] = cellState.CELL_EMPTY;
                    //setBoardState(stringifyBoardState(unpackedBoardState));
                    setNumberOfAttacksLeft(numberOfAttacksLeft - 1);
                    let boardStateString = stringifyBoardState(unpackedBoardState);

                    if (numberOfAttacksLeft < 2) {
                        // toggle player's turn
                        setPlayerTurn(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER); 
                        setCurrentPlayer(currentPlayer === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);
                        
                        // Reduce number of pieces in opponent's hand by 1
                        currentPlayer === player.FIRST_PLAYER? 
                                              setPlayerTwoPiecesLeft(playerTwoPiecesLeft - 1) 
                                              : 
                                              setPlayerOnePiecesLeft(playerOnePiecesLeft - 1);

                        // signify that double play has ended
                        setIsPlayerToAttackOpponentPieces(false);

                        // change the state of the matched cells to normal
                        boardStateString = boardStateString.replaceAll(
                          currentPlayer === player.FIRST_PLAYER? 
                            cellState.CELL_MATCHED_PLAYER_1.toString() 
                            : 
                            cellState.CELL_MATCHED_PLAYER_2.toString(),
                          currentPlayer === player.FIRST_PLAYER? 
                            cellState.CELL_CONTAINING_PIECE_PLAYER_1.toString()
                            : 
                            cellState.CELL_CONTAINING_PIECE_PLAYER_2.toString()
                        );
                        
                    } 

                    setBoardState(boardStateString);
                }
                else {
                    alert(pieceAttackValidityStatus.message);
                }
          }
          else {
              const pieceSelectionValidationStatus = isValidPieceToSelect(gamePlayState);
              if (pieceSelectionValidationStatus.isValid) {
                  // change the state of the selected cell to selected
                  unpackedBoardState[position.Y][position.X] = 
                  playerTurn === player.FIRST_PLAYER? 
                      cellState.CELL_SELECTED_PLAYER_1
                      : 
                      cellState.CELL_SELECTED_PLAYER_2;
                  setBoardState(stringifyBoardState(unpackedBoardState));
                  // signify that double play is activated
                  setIsPlayerToplayAgain(true);
                  setCellOfselectedPiece(position);
              }
              else {
                  alert(pieceSelectionValidationStatus.message);
              }
          }
      }
  }

  return (
    <div className="App">
      <h2>{`Player ${playerTurn}'s Turn to Play.`}</h2>
      <p>{`Pieces left in hand: ${playerTurn === player.FIRST_PLAYER? playerOnePiecesInHand : playerTwoPiecesInHand}`}</p>
      <p>{`Pieces left: ${playerTurn === player.FIRST_PLAYER? playerOnePiecesLeft: playerTwoPiecesLeft}`}</p>
      <Board 
          boardState = { boardState } 
          numberOfColumns = {5} 
          numberOfRows = {5}
          handleCellClick = { handleClick }
      />
    </div>
  );
};



export default App;
