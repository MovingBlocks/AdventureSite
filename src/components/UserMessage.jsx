import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import user from '../img/user-img.png';
import { UserResponseList } from './UserResponseList';
import urlToJSON from './utils/urlToJSON';
import BackIcon from '../img/back.png';
import createPathIdQuery from './utils/createPathIdQuery';

export default function UserMessage({ setjsonPathMap, jsonPathMap }) {
  const [userName, setuserName] = useState('Test-User >');

  const [searchParams, setSearchParams] = useSearchParams();
  const pathId = searchParams.get('pathId');

  useEffect(() => {
    setjsonPathMap(urlToJSON(pathId));
    setuserName('You');
  }, [pathId, setjsonPathMap]);

  return (
    <div className='user-message-section scroll'>
      {/* Back button link */}
      {/* when pathId is falsy (i.e. First Message) --> Don't render back buttom.  */}
      {pathId ? (
        <Link
          to={
            createPathIdQuery(String(pathId).substring(0, String(pathId).length - 2))
          }
          className='back-button'
        >
          <img src={BackIcon} alt='back' className={'back-img'}></img>
        </Link>
      ) : null}

      <div className='user-message'>
        {
          <UserResponseList
            pathId={pathId}
            setSearchParams={setSearchParams}
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
