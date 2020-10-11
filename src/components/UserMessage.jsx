import React, { useState, useEffect, useRef } from 'react';
import user from '../img/user-img.png';
import { UserResponseList } from './UserResponseList';
import urlToJSON from './utils/urlToJSON';
import { Link } from 'react-router-dom';
import BackIcon from '../img/back.png';

export default function UserMessage({ setjsonPathMap, jsonPathMap, pathId }) {
  const [userName, setuserName] = useState('Test-User >');
  const userMessageSection = useRef(null);

  useEffect(() => {
    setjsonPathMap(urlToJSON(pathId));
    urlToJSON(pathId);
    setuserName('You');
    if(userMessageSection.current)
      applyAvailableHeight()
  }, [pathId, setjsonPathMap]);

  //This function finds the available space and set the user-message parent wrapper height accordingly
  function applyAvailableHeight(){
    const windowWidth = window.innerHeight;
    const userMessageSectionOffset = userMessageSection.current.getBoundingClientRect().top;
    const userMessageSectionStyle = window.getComputedStyle(userMessageSection.current);
    let marginOffset = Number.parseInt(userMessageSectionStyle.getPropertyValue('margin-top'));
    let availableSpace = windowWidth - ( userMessageSectionOffset + 2*marginOffset );
    
    userMessageSection.current.style.height = `${availableSpace}px`
  }

  return (
    <div className='user-message-section scroll' ref={userMessageSection}>
      {/* Back button link */}
      {/* when pathId===undefined (i.e. First Message) --> Don't render back buttom.  */}
      {pathId !== undefined ? (
        <Link
          to={String(pathId).substring(0, String(pathId).length - 2)}
          className='back-button'
        >
          <img src={BackIcon} alt='back' className={'back-img'}></img>
        </Link>
      ) : null}

      <div className='user-message'>
        {
          <UserResponseList
            pathId={pathId}
            setjsonPathMap={(json) => {
              setjsonPathMap(json);
            }}
            jsonPathMap={jsonPathMap}
          />
        }
      </div>
      <div className='arrow'></div>
      <div className='user-profile-section'>
        <img className='user-img' alt={'User'} src={user}></img>
        <div className='user-name'>{userName}</div>
      </div>
    </div>
  );
}
