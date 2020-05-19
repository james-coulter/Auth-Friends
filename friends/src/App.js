import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
// import NewFriend from './components/NewFriend';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/Login'>Login</Link>
        <Link to='/protected'>Protected Page</Link>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          {/* <PrivateRoute path='/NewFriends' component={NewFriend} /> */}
          <Route exact path='/protected' component={FriendsList} />
          <Route path='/Login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
