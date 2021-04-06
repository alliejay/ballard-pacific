import React from 'react';
import Navigation from '../../components/Navigation/index.js';
import ActionWheels from '../../ActionWheels';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const PageWrapper = () => {

  const pathname = window.location.pathname;

  console.log("windonw", window.location.pathname)

  if(pathname == '/actionwheels') {
    return <div>
      <Router>
        <Switch>
          <Route path="/actionwheels">
            <ActionWheels />
          </Route>
        </Switch>
      </Router>
    </div>
  } else {
    return (
      <div>
        <Navigation/>
      </div>
    )
  }
};

export default PageWrapper;