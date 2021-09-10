import React from 'react';
import ReactDOM from 'react-dom';
import './components/Style.css';
import App from './App';
import AddLoginUser from './components/AddLoginUser';
import LoginForm from './components/LoginForm';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
     <Router>
       <Switch>
       <Route exact path='/' component={LoginForm}/>
        <Route path='/logout' component={LoginForm}/>
        <Route path='/adduser' component={AddLoginUser}/>
        <App/>
       </Switch>
       
     </Router>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
