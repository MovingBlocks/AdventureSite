import React, { useState, useEffect } from 'react';
import gooey from '../img/gooey.png';
import { Constants } from '../Constants';
import TypingEffect from './TypingEffect/TypingEffect';

export function BottomNavbar({ gooeyMessageText }) {
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
    if (messageLength > Constants.maxChars) {
      setdisplayMessage(gooeyText.substring(0, Constants.maxChars + 1));
      sethiddenMessage(gooeyText.substring(Constants.maxChars));
      setisMessageLong(true);
      setpostfix(Constants.readMore);
    } else {
      setdisplayMessage(gooeyText);
      setisMessageLong(false);
    }
  }, [gooeyText]);

  useEffect(() => {
    setGooeyText(gooeyMessageText);
  }, [gooeyMessageText]);

  function collapse() {
    if (isCollapsed) {
      setdisplayMessage(displayMessage.concat(hiddenMessage));
      setpostfix(Constants.showLess);
    } else {
      setdisplayMessage(
        displayMessage.toString().replace(hiddenMessage.toString(), ' ')
      );
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
      <img className='gooey fade-in-to-left' src={gooey} alt='Gooey'></img>
      <div className='gooey-message  fade-in-to-left' ref={gooeyMessage}>
        {
          <TypingEffect
            text={displayMessage}
            typingDelay={0}
            speed={10}
          ></TypingEffect>
        }

        {isMessageLong ? (
          <button className='message-collapse-button' onClick={collapse}>
            {postfix}
          </button>
        ) : null}
      </div>
    </div>
  );
}
