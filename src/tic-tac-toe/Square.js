import React from "react";
import style from "./ticTacToe.module.css";

export default function Square({value, onSquareClick}) {
    
    


    return (
        <>
            <button 
            className={style.square} 
            onClick={onSquareClick}
            >
                {value}
            </button>
        </>
    )
}