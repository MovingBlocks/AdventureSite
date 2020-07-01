import React from 'react';
import PathMap from './PathMap';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import UserMessage from './UserMessage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export function UserMessageSection({ setjsonPathMap, jsonPathMap }) {
  return (
    <div>
      <div>
        <center>
          <div className='tip'>Tip : Choose one of the following options.</div>
        </center>
      </div>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={650} classNames='fade'>
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
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  );
}
