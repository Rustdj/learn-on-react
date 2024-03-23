import React, { useState } from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import  Button  from './btn/Button';
import { User } from './user-data/User';



const App = () => {
  
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <Button count={count} onclick={handleClick} />
        <Button count={count} onclick={handleClick} />
        <User />
      </header>
      
    </div>
  );
}

export default App;



