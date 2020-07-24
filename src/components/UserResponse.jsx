import React from 'react';

//Each UserResponse
export function UserResponse({ object, index, setChild, next }) {
  return (
    <center>
      <div className={'fade-in-to-right'}>
        <button
          className='response'
          onClick={() => {
            if (object.child !== undefined) {
              setChild(object.child);
            } else if (object.isGraph === true) {
              document.location += 'map';
            } else if (object.link !== undefined) {
              window.open(object.link, '_blank');
            }
          }}
        >
          {index + '. ' + object.name}
        </button>
      </div>
    </center>
  );
}
