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
            } else if (object.link !== undefined) {
              document.location += object.link;
            }
          }}
        >
          {index + '. ' + object.name}
        </button>
      </div>
    </center>
  );
}
