import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { UserMessageSection } from './components/UserMessageSection';
import { GooeyBar } from './components/GooeyBar';
import { Background } from './components/Background';
import json from './data/pathMap';

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
        <GooeyBar gooeyMessageText={gooeyMessage} />
        <UserMessageSection
          jsonPathMap={jsonPathMap}
          setjsonPathMap={(json) => setjsonPathMap(json)}
        />
      </Background>
    </React.Fragment>
  );
}
