import React, { useState, useEffect } from 'react';
import gooey from '../img/gooey.png';
import { Constants } from '../Constants';

export function BottomNavbar() {
  //Reference for gooey-message for DOM modification.
  let gooeyMessage = React.createRef();

  // State Intiallization

  // Message text in collapsed mode.
  const [displayMessage, setdisplayMessage] = useState(
    'Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! I will be guiding you through this Journey to know Moving Blocks & Terasology better_______ blah blah blah blah blah blah blah blah blah blah blah blah blah blah :) Lorem ipsum dolor sit amet consectetur adipisicing elit. '
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

    //only for mobile phones (handling the overflowed chat arrow element `gooey-message:after`)
    var classname = gooeyMessage.current.className;

    if (classname === 'gooey-message') {
      gooeyMessage.current.className += ' over-auto';
    } else {
      gooeyMessage.current.className = 'gooey-message';
    }
  }

  return (
    <div className='bottom-nav scroll'>
      <img className='gooey' src={gooey} alt='Gooey'></img>
      <div className='gooey-message' ref={gooeyMessage}>
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
