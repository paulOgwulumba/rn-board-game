import React, { useState } from 'react';
import './App.css';
import { Board } from './components';
import { unpackBoardState, stringifyBoardState, isValidCellToAddPieceTo } from './utils';
import { cellPosition, gamePlayState } from './utils/interfaces';
import { player, cellState } from './utils/constants';

const initialBoardState = `00000_00000_00000_00000_00000`;

function App() {
  const [boardState, setBoardState] = useState(initialBoardState);
  const [playerTurn, setPlayerTurn] = useState(player.FIRST_PLAYER);
  const [currentPlayer, setCurrentPlayer] = useState(player.FIRST_PLAYER);
  const [allPiecesAddedToBoard, setAllPiecesAddedToBoard] = useState(false);
  const [playerOnePiecesInHand, setPlayerOnePiecesInHand] = useState(8);
  const [playerOnePiecesLeft, setPlayerOnePiecesLeft] = useState(8);
  const [playerTwoPiecesInHand, setPlayerTwoPiecesInHand] = useState(8);
  const [playerTwoPiecesLeft, setPlayerTwoPiecesLeft] = useState(8)

  
  const handleClick = (position: cellPosition) => {
      const unpackedBoardState = unpackBoardState(boardState);
      const gamePlayState: gamePlayState = {
          playerTurn, 
          boardState: unpackedBoardState,
          currentPlayer,
          cellClicked: position,
          allPiecesAddedToBoard
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
          console.log('All pieces have been added to the board.')
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
