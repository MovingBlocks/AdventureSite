import React from 'react';
import PathMap from './PathMap';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import UserMessage from './UserMessage';

export function UserMessageSection({ setjsonPathMap, jsonPathMap }) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/map" element={PathMap} />
        <Route
          path="/AdventureSite"
          element={
            <div className={'fade-in-to-right'}>
              <UserMessage
                setjsonPathMap={(json) => setjsonPathMap(json)}
                jsonPathMap={jsonPathMap}
              />
            </div>
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
