import React from 'react';
import PathMap from './PathMap';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import UserMessage from './UserMessage';

export function UserMessageSection({ setjsonPathMap, jsonPathMap }) {
  return (
    <Router>
      <Routes>
      <Route
        render={({ location }) => (
          <Routes location={location}>
            <Route
              // pathId - URL param for directly accessing particular path.
              path='/:pathId? '
              component={({ match }) => (
                <div className={'fade-in-to-right'}>
                  <UserMessage
                    pathId={match.params.pathId}
                    setjsonPathMap={(json) => setjsonPathMap(json)}
                    jsonPathMap={jsonPathMap}
                  />
                </div>
              )}
            />

            <Route path='/map' component={PathMap} />
          </Routes>
        )}
      />
      </Routes>
    </Router>
  );
}
