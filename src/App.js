import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UserMessageSection } from './components/UserMessageSection';
import { BottomNavbar } from './components/BottomNavbar';
import { Background } from './components/Background';
import json from './data/test-map.json';

export default function App() {
  //PathMap Object
  const [jsonPathMap, setjsonPathMap] = useState(json);

  // Message text in collapsed mode.
  const [gooeyMessage, setgooeyMessage] = useState(
    'Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! I will be guiding you through this Journey to know Moving Blocks & Terasology better_______ blah blah blah blah blah blah blah blah blah blah blah blah blah blah :) Lorem ipsum dolor sit amet consectetur adipisicing elit. '
  );

  useEffect(() => {
    if (jsonPathMap !== undefined) {
      setgooeyMessage(jsonPathMap['gooey-response'].gooey);
    }
  }, [jsonPathMap]);

  return (
    <React.Fragment>
      <Background>
        <Navbar />
        <UserMessageSection
          jsonPathMap={jsonPathMap}
          setjsonPathMap={(json) => setjsonPathMap(json)}
        />
        <BottomNavbar gooeyMessageText={gooeyMessage} />
      </Background>
    </React.Fragment>
  );
}
