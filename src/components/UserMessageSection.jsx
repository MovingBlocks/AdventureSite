import React, { useState } from 'react';
import user from '../img/user-img-test.png';
import { UserResponseList } from './UserResponseList';

export function UserMessageSection() {
  const [userName, setuserName] = useState('Test-User >');

  return (
    <>
      <div>
        <center>
          <div className='tip'>Tip : Choose one of the following options.</div>
        </center>
      </div>
      <div className='user-message-section scroll'>
        <div className='user-message'>
          {<UserResponseList />}

          {/* following section will be removed later, It's for testing the behaviour of the div having large data*/}
          <center>
            || ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||--------- Added this to test the scrollbar ---------||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br> ||
            ---------------------------------------------------------- ||
            <br></br>
          </center>

          {/* End of test section */}
        </div>
        <div className='arrow'></div>
        <div>
          <img className='user' alt={'User'} src={user}></img>
          <p className='user-name'>{userName}</p>
        </div>
      </div>
    </>
  );
}
