import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Restart({ onClick }) {

  return (
    <button className="restart" onClick={onClick}>
      Play again
    </button>
  );
}

function Game() {

  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ player, setPlayer ] = useState(true);
  const isWin = win(squares);


  function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        if (squares[i] != null || isWin != null) {
          return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = (player ? "X" : "O");
        setSquares(nextSquares);

        setPlayer(!player); // toggle turns
      }}
    />;
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          if (isWin != null) {
            return;
          }else{
          setSquares(Array(9).fill(null));
          setPlayer(true);
          }
        }}
      />
    );
  }


  function winner() {
    if (isWin) 
    {
      return "Winner: " + isWin;
    } 
    else if (tie(squares)) 
    {
      return "Draw!";
    }
  }
  
  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{winner()}</div>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));


function win(squares) {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < winStates.length; i++) {
    const [a, b, c] = winStates[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function tie(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}
