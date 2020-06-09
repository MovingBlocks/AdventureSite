import React, { useState, useEffect } from 'react';
import gooey from '../img/gooey.png';
import { Constants } from '../Constants';

export function BottomNavbar() {
  // State Intiallization

  // Message text in collapsed mode.
  const [displayMessage, setdisplayMessage] = useState(
    'Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! I will be guiding you through this Journey to know Moving Blocks & Terasology better_______ blah blah blah blah blah blah blah blah blah blah blah blah blah blah :) '
  );

  // Message text after `Read More`
  const [hiddenMessage, sethiddenMessage] = useState(null);

  // Read More / Show Less button
  const [postfix, setpostfix] = useState(null);

  const [isMessageLong, setisMessageLong] = useState(false);
  const [isCollapsed, setisCollapsed] = useState(true);

  useEffect(() => {
    const messageLength = displayMessage.length;

    // if message needs to be in collapsed mode (Long Message)
    if (messageLength > Constants.maxChars) {
      setdisplayMessage(displayMessage.substring(0, Constants.maxChars + 1));
      sethiddenMessage(displayMessage.substring(Constants.maxChars));
      setisMessageLong(true);
      setpostfix(Constants.readMore);
    }
  }, []);

  function collapse() {
    if (isCollapsed) {
      setpostfix(Constants.showLess);
    } else {
      setpostfix(Constants.readMore);
    }
    setisCollapsed(!isCollapsed);
  }

  return (
    <div className='bottom-nav' id='bottom-nav'>
      <img className='gooey' src={gooey} alt='Gooey'></img>
      <div className='gooey-message'>
        {displayMessage}
        {!isCollapsed ? hiddenMessage : null}
        {isMessageLong ? (
          <button className='message-collapse-button' onClick={collapse}>
            {postfix}
          </button>
        ) : null}
      </div>
    </div>
  );
}
