import React from 'react';
import './styles/index.css';
import { Navbar } from './components/Navbar';
import { UserMessageSection } from './components/UserMessageSection';
import { BottomNavbar } from './components/BottomNavbar';
import { Background } from './components/Background';

export default function App() {
  return (
    <React.Fragment>
      <Background>
        <Navbar />
        <UserMessageSection />
        <BottomNavbar />
      </Background>
    </React.Fragment>
  );
}
