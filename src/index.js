import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { createHashHistory } from 'history';
//TODO move the components out of here and into a `./components` folder
// import routes from './routes.jsx';

class About extends React.Component{
  render(){
    return (<h1>About</h1>);
  }
}
class Users extends React.Component{
  render(){
    return (<h1>Users</h1>);
  }
}
class App extends React.Component{
  render(){
    return (<div className="head">
      <h1>Net Navigator</h1>
      <h3>Learn to navigate the innards of the web with Andy the bot</h3>
      <div className="main">
      {this.props.children}
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
    );
  }
}
const routes =
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="users" component={Users}/>
  </Route>;
const history = createHashHistory({queryKey:false});
const r =
  <Router history={history}>
    {routes}
  </Router>;
render(r, document.body);
