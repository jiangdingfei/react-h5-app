import React from 'react';
import {
  Route,
  Redirect,
  HashRouter,
  Switch
} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function routerMap() {
  return (
    <HashRouter>
			<Switch>
				<Redirect exact from="/" to="/home"></Redirect>
				<Route path="/login" component={Login}></Route>
				<Route path="/home" component={Home}></Route>
			</Switch>
		</HashRouter>
  )
}