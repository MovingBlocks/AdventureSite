import React from 'react';
import { UserResponse } from './UserResponse';
import { useState, useEffect } from 'react';

//List of the User Responses in User Section
export function UserResponseList({ setjsonPathMap, jsonPathMap }) {
  const [data, setData] = useState(jsonPathMap);

  useEffect(() => {
    setData(jsonPathMap);
  }, [jsonPathMap]);

  return (
    <div>
      {Object.entries(data['user-responses']).map((d, index) => (
        <UserResponse
          key={d[0] + index}
          object={d[1]}
          index={index + 1}
          setChild={(child) => {
            if (child !== undefined) {
              setjsonPathMap(child);
            }
          }}
        />
      ))}
    </div>
  );
}
