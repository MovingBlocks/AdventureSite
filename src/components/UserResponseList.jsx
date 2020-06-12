import React from 'react';
import '../styles/index.css';
import { UserResponse } from './UserResponse';
import data from '../data/test-map.json';

//List of the User Responses in User Section
export function UserResponseList() {
  return (
    <div>
      {data.map((d, index) => (
        <UserResponse name={d.name} index={index + 1} />
      ))}
    </div>
  );
}
