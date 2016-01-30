//TODO make these actually work
import App from './components/app.jsx';
import About from './components/about.jsx';
import Users from './components/users.jsx';
import { Route } from 'react-router';
const routes =
<Route path="/" component={App}>
  <Route path="about" component={About}/>
  <Route path="users" component={Users}/>
</Route>;

modules.exports = {routes};
