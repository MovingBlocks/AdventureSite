import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import createPathIdQuery from './utils/createPathIdQuery';

//Each UserResponse
export function UserResponse({ object, index, pathId }) {
  //url to visit on user selection
  const [url, setURL] = useState('');

  useEffect(() => {
    if (!pathId) {
      setURL('');
    } else {
      setURL(pathId);
    }
  }, [pathId]);

  return (
    <center>
      <div className={'fade-in-to-right response-parent'}>
        <Link
          className={
            //check if it's an external link
            object.link !== undefined ? 'link' : 'response'
          }
          to={
            object.child !== undefined
              ? createPathIdQuery(
                url.toString() +
                'u' +
                (Number(index) - 1).toString())
              : object.jump !== undefined
              ? createPathIdQuery(object.jump.toString())
              : object.link === undefined
              ? '/'
              : createPathIdQuery(url.toString())
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
          {object.link !== undefined ? (
            <span
              role='img'
              aria-label={'External link.'}
              title={'External link'}
            >
              {/* Add space and pin to notify about external link */}
              &nbsp; 🔗
            </span>
          ) : (
            ''
          )}
        </Link>
      </div>
    </center>
  );
}
