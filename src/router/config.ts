// import React, { Suspense, lazy } from 'react';
import HooksDemo from '../pages/HooksDemo'

// interface RoutesItem {
//   path: string
//   component: string
//   [key: string]: string | Routes
// }
// type Routes = RoutesItem[]
const path = require('path')
interface RouterConfigItem  {
  path: string
  components: string
  [key: string]: string | RouterConfig
}
type RouterConfig = RouterConfigItem[]

// const HooksDemo = lazy(() => import('../pages/HooksDemo'))
/* 
  不使用代码分割是，可以写成 下面的形式
*/
export default [
  {
    path: '/',
    component: HooksDemo
  }
]