import React from "react";
import style from "./ticTacToe.module.css";

export default function Square({value}) {
    return (
        <>
            <button className={style.square}>{value}</button>
        </>
    )
}