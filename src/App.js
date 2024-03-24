import React, { useState } from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import  Button  from './btn/Button';
import { User } from './user-data/User';
import Board from './tic-tac-toe/Board';



const App = () => {
  
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <Button count={count} onClick={handleClick} />
        <Button count={count} onClick={handleClick} />
        <User />
        <Board />
      </header>
      
    </div>
  );
}

export default App;



