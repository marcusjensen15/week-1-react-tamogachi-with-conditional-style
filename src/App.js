import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import GameController from './components/GameController';

class App extends React.Component {

render() {

  return (
    <div className='appdiv'>
    <Switch>
    <Route exact path='/' component={GameController}/>
    </Switch>
    </div>
  );
}
}

export default App;
