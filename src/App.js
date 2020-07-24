import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UserMessageSection } from './components/UserMessageSection';
import { BottomNavbar } from './components/BottomNavbar';
import { Background } from './components/Background';
import json from './data/test-map.json';

export default function App() {
  //PathMap Object
  const [jsonPathMap, setjsonPathMap] = useState(json);

  // Message text is updated via PathMap json data file.
  const [gooeyMessage, setgooeyMessage] = useState('');

  useEffect(() => {
    if (jsonPathMap !== undefined) {
      setgooeyMessage(jsonPathMap['gooey-response'].gooey);
    }
  }, [jsonPathMap]);

  return (
    <React.Fragment>
      <Background>
        <Navbar />
        <BottomNavbar gooeyMessageText={gooeyMessage} />
        <UserMessageSection
          jsonPathMap={jsonPathMap}
          setjsonPathMap={(json) => setjsonPathMap(json)}
        />
      </Background>
    </React.Fragment>
  );
}
