import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Each UserResponse
export function UserResponse({ object, index, pathId }) {
  //url to visit on user selection
  const [url, setURL] = useState('');

  useEffect(() => {
    if (pathId === undefined) {
      setURL('');
    } else {
      setURL(pathId);
    }
  }, [pathId]);

  return (
    <center>
      <div className={'fade-in-to-right response-parent'}>
        <Link
          className='response'
          to={
            object.child !== undefined
              ? url.toString() + 'u' + (Number(index) - 1).toString()
              : '/'
          }
          onClick={() => {
            if (object.isGraph === true) {
              document.location += 'map';
            } else if (object.link !== undefined) {
              window.open(object.link, '_blank');
            }
          }}
        >
          {index + '. ' + object.name}
        </Link>
      </div>
    </center>
  );
}
