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
import Encrypt from '@/pages/Encrypt'
import Attempt from '@/pages/Attempt'
import HooksDemo from '@/pages/HooksDemo'
export default function routerMap() {
  return (
    <HashRouter>
			<Switch>
				<Redirect exact from="/" to="/home"></Redirect>
				<Route path="/login" component={Login}></Route>
				<Route exact path="/home" component={Home}></Route>
        <Route exact path="/home/list" component={HomeList}></Route>
        <Route path="/encrypt" component={Encrypt}></Route>
        <Route path="/home/hooks/demo" component={HooksDemo}></Route>
        <Route path="/test" component={Attempt}></Route>
			</Switch>
		</HashRouter>
  )
}
