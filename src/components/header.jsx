import React from 'react';
import troll from "../pics/Troll Face.png"

export default function Header(){
    return(
        <div className='header'>
            <img className='troll' src={troll} alt="troll"/>
            <h2 className='header-text'>Meme Generator</h2>
            <h3 className='headerTwo'>React Course - Part 3</h3>
        </div>
    )
}