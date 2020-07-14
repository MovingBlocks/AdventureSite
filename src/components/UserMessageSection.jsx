import React from 'react';
import PathMap from './PathMap';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import UserMessage from './UserMessage';

export function UserMessageSection({ setjsonPathMap, jsonPathMap }) {
  return (
    <div className={"fade-in-to-right"}>
      <Router>
        <Route
          render={({ location }) => (

                <Switch location={location}>
                  <Route
                    path='/'
                    exact
                    component={() => (
                      <UserMessage
                        setjsonPathMap={(json) => setjsonPathMap(json)}
                        jsonPathMap={jsonPathMap}
                      />
                    )}
                  />

                  <Route path='/map' component={PathMap} />
                </Switch>
          )}
        />
      </Router>
    </div>
  );
}
