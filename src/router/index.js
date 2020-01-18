import React from 'react';
import {
  Route,
  Redirect,
  HashRouter,
  Switch
} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import HomeList from '../pages/Home/HomeList'

export default function routerMap() {
  return (
    <HashRouter>
			<Switch>
				<Redirect exact from="/" to="/home"></Redirect>
				<Route path="/login" component={Login}></Route>
				<Route exact path="/home" component={Home}></Route>
        <Route path="/home/list" component={HomeList}></Route>
			</Switch>
		</HashRouter>
  )
}
