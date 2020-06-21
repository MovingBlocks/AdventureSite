import React from 'react';
import '../styles/index.css';
import { UserResponse } from './UserResponse';
import json from '../data/test-map.json';
import { useState } from 'react';

//List of the User Responses in User Section
export function UserResponseList() {
  const [data, setData] = useState(json);

  function NavigateChild(child) {
    if (child !== undefined) {
      setData(child);
    }
  }

  return (
    <div>
      {Object.entries(data).map((d, index) => (
        <UserResponse
          key={d[0] + index}
          object={d[1]}
          index={index + 1}
          setChild={(child) => NavigateChild(child)}
        />
      ))}
    </div>
  );
}
