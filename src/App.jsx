import {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  const[count, setCount] = useState(0);

  var gridItems = document.querySelectorAll(".grid-item");

  var [board, setBoard] = useState();
  
  setBoard = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

  var player = 1;

  var win = false;

  function decrement()
  {
    setCount (prevCount => prevCount - 1)
  }

  function increment()
  {
    setCount (prevCount => prevCount + 1)
  }

  function displayBoard() {
    gridItems.forEach(function (item) 
    {
      var itemNum = parseInt(item.id)
      document.getElementById(item.id).innerHTML = setBoard[itemNum]
    })
  }

  //changes the player each time the grid is pressed
  function changePlayer() {
    player = player + 1;
  }

  function changeBoard() {
    gridItems.forEach(function (item) {
    
    var index = item.getAttribute("data-index");

    var indexNum = parseInt(index);
      //makes it so that if there's already an x or an o
      // on the grid you're trying to change it won't put an x or an o
      //also resets the player count for that turn
      if (board[indexNum] === "o" || board[indexNum] === "x") {
        //  player = player - 1;
        return false;
     }
     //checks to see if player is even, and if it is,
     //places an o
      else if (player % 2 === 0) {
        board[indexNum] = "o";
      }
     //if player is odd places an x
     else {
       board[indexNum] = "x";
     }
      return true;
  })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {displayBoard}>display board</button>
    <div class="grid-container">
      {/*<!data-index, used for location, id for inputting
			text into the div>*/}
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="0" id="0">1</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="1" id="1">2</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="2" id="2">3</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="3" id="3">4</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="4" id="4">5</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="5" id="5">6</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="6" id="6">7</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="7" id="7">8</div>
      <div class="grid-item" onClick = {displayBoard} onClick = {changeBoard} data-index="8" id="8">9</div>
    </div>

    <div id="win"></div>
    {/*<!displays option>*/}
    <div id="restart"></div>
    {/*<!the input for the restart>*/}
    <form class="input-form">
      <input type="button" class="input" id="input" value="restart" />
    </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
