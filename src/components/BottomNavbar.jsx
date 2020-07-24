import React, { useState, useEffect } from 'react';
import gooey from '../img/gooey.png';

export function BottomNavbar({ gooeyMessageText }) {
  //Constant max chars to be shown in collapsed view of the message
  const maxChars = 130;

  //To avoid collapsed mode for the Initial Message
  const initialMessage =
    '👋 Hey there, I am gooey! Welcome to Moving Blocks Tutorial Journey! I will be guiding you through this Journey to know Moving Blocks better. You can respond to my questions by selecting an appropriate reply in above 👆 User Section.';

  //Reference for gooey-message for DOM modification.
  let gooeyMessage = React.createRef();

  // State Intiallization
  const [gooeyText, setGooeyText] = useState(gooeyMessageText);

  // Message text in collapsed mode.
  const [displayMessage, setdisplayMessage] = useState(gooeyText);

  // Message text after `Read More`
  const [hiddenMessage, sethiddenMessage] = useState(null);

  // Read More / Show Less button
  const [postfix, setpostfix] = useState(null);

  const [isMessageLong, setisMessageLong] = useState(false);
  const [isCollapsed, setisCollapsed] = useState(true);

  useEffect(() => {
    const messageLength = gooeyText.length;

    // if message needs to be in collapsed mode (Long Message)
    if (messageLength > maxChars && gooeyText !== initialMessage) {
      setdisplayMessage(gooeyText.substring(0, maxChars + 1));
      sethiddenMessage(gooeyText.substring(maxChars));
      setisMessageLong(true);
      setpostfix('... Read More');
    } else {
      setdisplayMessage(gooeyText);
      setisMessageLong(false);
    }
  }, [gooeyText, maxChars]);

  useEffect(() => {
    setGooeyText(gooeyMessageText);
  }, [gooeyMessageText]);

  function collapse() {
    if (isCollapsed) {
      setdisplayMessage(displayMessage.concat(hiddenMessage));
      setpostfix('Show Less');
    } else {
      setdisplayMessage(
        displayMessage.toString().replace(hiddenMessage.toString(), ' ')
      );
      setpostfix('... Read More');
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
      <img
        id='gooey'
        className='gooey fade-in-to-left'
        src={gooey}
        alt='Gooey'
      ></img>
      <div className='gooey-message  fade-in-to-left' ref={gooeyMessage}>
        {displayMessage}

        {isMessageLong ? (
          <button className='message-collapse-button' onClick={collapse}>
            {postfix}
          </button>
        ) : null}
      </div>
    </div>
  );
}
