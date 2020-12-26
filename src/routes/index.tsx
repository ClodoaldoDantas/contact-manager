import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ContentRoute from './ContentRoute';

const Routes = () => {
  return (
    <Switch>
      <ContentRoute exact path="/" component={Login} />
      <ContentRoute path="/register" component={Register} />
      <ContentRoute isPrivate path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
