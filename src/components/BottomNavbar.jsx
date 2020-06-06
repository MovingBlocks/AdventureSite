import React from 'react';
import gooey from '../img/gooey.png';

export function BottomNavbar() {
  return (
    <div className='bottomNav' id='bottomNav'>
      <img className='gooey' src={gooey} alt='Gooey'></img>

      <div className='gooey-message' id='Gooey-Message'>
        Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! I will
        be guiding you through this Journey to know Moving Blocks & Terasology
        better_______ :)
      </div>
    </div>
  );
}
