import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAtempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  const onSelectLetter = (keyVal) => {
    if(currAtempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAtempt.attempt][currAtempt.letterPos] = keyVal;
    setCurrAttempt({...currAtempt, letterPos: currAtempt.letterPos + 1});
    setBoard(newBoard)
  }

  const onDelete = () => {
    if(currAtempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAtempt.attempt][currAtempt.letterPos - 1] = "";
    setBoard(newBoard)
    setCurrAttempt({...currAtempt, letterPos: currAtempt.letterPos - 1})
  }
  const onEnter = () => {
    if(currAtempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAtempt.attempt + 1, letterPos:0})
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle Cura Deuda</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAtempt, setCurrAttempt, onSelectLetter, onDelete, onEnter }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
