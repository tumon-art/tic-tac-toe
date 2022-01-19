import { useState, useEffect} from "react";
import { Square } from "./comps/Square";
import { Patterns } from "./comps/Patterns"

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  return (
    <div className="App">
      <h1 className=" text-6xl sm:text-8xl text-sky-500 motion-safe:animate-bounce 
       mt-7 font-sans font-extrabold"
      > Tic Tac Toe </h1>
    <div className=" w-80 h-80 grid grid-cols-3 
    justify-items-center items-center ring ring-slate-700
     shadow-lg shadow-slate-900 bg-blue-800 rounded-xl">

       <Square val={board[0]} onClick={()=> chooseSquare(0)} />
       <Square val={board[1]} onClick={()=> chooseSquare(1)} />
       <Square val={board[2]} onClick={()=> chooseSquare(2)} />
       <Square val={board[3]} onClick={()=> chooseSquare(3)} />
       <Square val={board[4]} onClick={()=> chooseSquare(4)} />
       <Square val={board[5]} onClick={()=> chooseSquare(5)} />
       <Square val={board[6]} onClick={()=> chooseSquare(6)} />
       <Square val={board[7]} onClick={()=> chooseSquare(7)} />
       <Square val={board[8]} onClick={()=> chooseSquare(8)} />
    </div>
    </div>
  );
}

export default App;
