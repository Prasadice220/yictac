import React, {useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper"

const App = () => {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXnext,setXnext] = useState(false)

  const winner = calculateWinner(board)
  console.log(winner)
  const message = winner ? `Winner is ${winner}`:
   `Next is ${isXnext ? 'X': 'O' }`
  const handleSquare = (position)=>{
    if(board[position] || winner){
      return
    }
    
    setBoard((prev)=>{
      return prev.map((square,pos)=>{
      if(pos === position){
        
        return isXnext ? 'X':'O'
      }
      else{
        return square;
      }
       }
      )
    })
    setXnext((prev)=> !prev
      
    )
  }
return (
  <div className="app">
  <h1>Welcome to Tictactoe!</h1>
  <h2>{message}</h2>
  <Board board={board} handleSquare={handleSquare}/>
  
</div>
)
  
}
export default App
