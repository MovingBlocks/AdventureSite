import React, { useState, useEffect } from 'react';
import user from '../img/user-img-test.png';
import { UserResponseList } from './UserResponseList';

export default function UserMessage() {
  const [userName, setuserName] = useState('Test-User >');
  useEffect(() => {
    setuserName('TheShubham99');
  }, []);

  return (
    <div className='user-message-section scroll'>
      <div className='user-message'>{<UserResponseList />}</div>
      <div className='arrow'></div>
      <div>
        <img className='user' alt={'User'} src={user}></img>
        <p className='user-name'>{userName}</p>
      </div>
    </div>
  );
}
