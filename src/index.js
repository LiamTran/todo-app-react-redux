import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

//tasks
import IndexTasks from './components/index-tasks';
import ShowTask from './components/show-task';
import NewTask from './components/new-task';


//user
import NewUser from './components/new-user';
import UserLogin from './components/user-login';
import WellCome from './components/welcome';


// create store
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/tasks/new" component={NewTask} ></Route>
          <Route path="/tasks/:id" component={ShowTask} ></Route>
          <Route path="/tasks" component={IndexTasks} />
          <Route path="/users/new" component={NewUser} />
          <Route path="/users/login" component={UserLogin} />
          <Route path="/" component={WellCome} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)