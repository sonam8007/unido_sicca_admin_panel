
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import Login from "components/Login/Login.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route exact path="/login" component={Login} render={props =>null} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  
  document.getElementById("root")
  // ReactDOM.render(<App />, document.getElementById('root'));
);
