import React from "react";
import style from '../App.module.css';

const user = {
    name: 'Jesus',
    image: 'https://indasil.club/uploads/posts/2022-12/1669890697_43-indasil-club-p-risunok-iisusa-khrista-dlya-detei-vkontakt-53.jpg'
}

export function User() {
    return (
        <>
        <div className={style.body}>
            <h1>{user.name}</h1>
            <img 
            className={style.img}
            src={user.image}
            alt={'photo of' + user.name}
            />
        </div>
            
        </>
    )
}