import React, { Suspense, lazy } from 'react';
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
// import HooksDemo from '@/pages/HooksDemo'
// import routerConfig from './config'
// console.log(routerConfig[0].component, 'c')
// const HooksDemo = lazy(() => require(routerConfig[0].component))

/* 思路2 */
const HooksDemo = lazy(() => import('../pages/HooksDemo'))
export const config = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/home/list',
    component: HomeList
  },
  {
    path: '/encrypt',
    component: Encrypt
  },
  {
    path: '/home/hooks/demo',
    component: HooksDemo
  },
  {
    path: 'test',
    component: Attempt
  }
]
export default function routerMap() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          {config.map(item=> (
            <Route key={item.path} {...item}></Route>            
          ))}
        </Switch>
      </Suspense>
		</HashRouter>
  )
}
