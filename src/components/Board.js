import React, { useState } from "react";
import Square from "./Square";
import 'bootstrap/dist/css/bootstrap.css'
const Board =()=>{
    const [state,setState]=useState(Array(9).fill(null))
    const [isXturn,setIsXturn]=useState(true)
    const clickHandle=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState=[...state]
        copyState[index]=isXturn?"X":"O"
        setState(copyState)
        setIsXturn(!isXturn)
    }
    const checkWinner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let logic of winner){
            const [a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false
    }
    const isWinner=checkWinner();
    const boardReset=()=>{
        setState(Array(9).fill(null))
    }
    return(
        <div className="board-container">
            <>
            </>
            {isWinner ? <>{isWinner} Won The Game  <button className="btn btn-sm btn-info rounded-pill" onClick={boardReset}>Play Again</button></>:
            <>
                <h1 className="text-center">Enter {isXturn?"X":"O"} </h1>
                <div className="board-row">
                    <Square onClick={()=>clickHandle(0)} value={state[0]}/>
                    <Square onClick={()=>clickHandle(1)} value={state[1]}/>
                    <Square onClick={()=>clickHandle(2)} value={state[2]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=>clickHandle(3)} value={state[3]}/>
                    <Square onClick={()=>clickHandle(4)} value={state[4]}/>
                    <Square onClick={()=>clickHandle(5)} value={state[5]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=>clickHandle(6)} value={state[6]}/>
                    <Square onClick={()=>clickHandle(7)} value={state[7]}/>
                    <Square onClick={()=>clickHandle(8)} value={state[8]}/>
                </div>
            </>}
        </div>
    )
}
export default Board;