import React, { useState, useEffect } from 'react';
import user from '../img/user-img-test.png';
import { UserResponseList } from './UserResponseList';
import urlToJSON from './utils/urlToJSON';
import { Link } from 'react-router-dom';
import BackIcon from '../img/back.png';

export default function UserMessage({ setjsonPathMap, jsonPathMap, pathId }) {
  const [userName, setuserName] = useState('Test-User >');
  useEffect(() => {
    setjsonPathMap(urlToJSON(pathId));
    urlToJSON(pathId);
    setuserName('TheShubham99');
  }, [pathId, setjsonPathMap]);

  return (
    <div className='user-message-section scroll'>
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
        <p className='user-name'>{userName}</p>
      </div>
    </div>
  );
}
