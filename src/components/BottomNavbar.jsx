import React from 'react'
import Gooey from '../img/Gooey.svg'

export function BottomNavbar() {
    return (
        <div className="bottomNav" id="bottomNav" >


            <img className="Gooey" src={Gooey} alt="Gooey"></img>

            <div className="Gooey-Message" id="Gooey-Message">
                Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! 
                I will be guiding you through this Journey to know Moving Blocks & Terasology better_______ :)
            </div>
        </div>
    )
}
