import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store'
import { Route, withRouter, Redirect } from 'react-router-dom';
import { Home } from './components';
import './App.css';

const App = () => (
  <body>
    {/* <Provider store={store}> */}
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <Route path="/home" render={() => <Home />} />
    {/* </Provider> */}
  </body>
);

export default withRouter(App);
