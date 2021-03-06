import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';


// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  // console.log("getToken:",getToken());
  return (
    <Route
      {...rest}
      render={(props) => getToken() != null ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;