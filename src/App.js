import { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./components/Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAtempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  return (
    <div className="App">
      <nav>
        <h1>Wordle Cura Deuda</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAtempt, setCurrAttempt }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
