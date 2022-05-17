import React, {useContext} from 'react'
import { AppContext } from '../App'

const Key = ({keyVal, bigKey}) => {
    const {board, setBoard, currAtempt,setCurrAttempt} = useContext(AppContext)

    const selectLetter = () => {
        if(keyVal === "ENTER"){
            if(currAtempt.letterPos !== 5) return;
            setCurrAttempt({ attempt: currAtempt.attempt + 1, letterPos:0})
        } else {
            if(currAtempt.letterPos > 4) return;
            const newBoard = [...board]
            newBoard[currAtempt.attempt][currAtempt.letterPos] = keyVal;
            setCurrAttempt({...currAtempt, letterPos: currAtempt.letterPos + 1});
            setBoard(newBoard)
        }
    }

  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key