import React from "react";
import style from './Button.module.css';


const Button = (props) => {

    
    return (
        <>
            <div className={style.btn}
                type="button"
            >
                <button onClick={props.onClick}>
                    HOVER ME, {props.count} THEN CLICK ME!
                </button>
            </div>  
        </>
    )
}

export default Button;