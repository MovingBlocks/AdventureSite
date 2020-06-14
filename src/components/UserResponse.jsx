import React from 'react';
import '../styles/index.css';

//Each UserResponse
export function UserResponse({ name, index, type, next }) {
  return <button className='response'>{index + '. ' + name}</button>;
}
