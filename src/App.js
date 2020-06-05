import React from 'react';
import './styles/index.css';
import { Navbar } from './components/Navbar';
import { UserMessageDiv } from './components/UserMessageDiv';
import { BottomNavbar } from './components/BottomNavbar';
import { Background } from './components/Background';


export default function App() {
  return (
    <React.Fragment>

      <Background>
        <Navbar />
        <UserMessageDiv />
        <BottomNavbar />
      </Background>

    </React.Fragment>
  )
}

