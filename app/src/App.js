import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { HomeContainer } from './components'
import './App.css';

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
        <Route exact path='/' render={() => <Redirect to="/home" />} />
        <Route path='/home' render={() => <HomeContainer/>} />
      {/* </Provider> */}
    </>
  );
}

export default withRouter(App);
