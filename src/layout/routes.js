import { lazy } from 'react'

import NotFount from './NotFound'

const Dashboard = lazy(() =>
  import(/* webpackChunkName: "dashboard" */ 'pages/Dashboard/Dashboard'),
)
const MovieList = lazy(() =>
  import(/* webpackChunkName: "movie_list" */ 'pages/Movie/MovieList'),
)
const UserList = lazy(() =>
  import(/* webpackChunkName: "user_list" */ 'pages/User/UserList'),
)
const RoleList = lazy(() =>
  import(/* webpackChunkName: "role_list" */ 'pages/Role/RoleList'),
)
const PermissionList = lazy(() =>
  import(
    /* webpackChunkName: "permission_list" */ 'pages/Permission/PermissionList'
  ),
)

const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard,
    exact: true,
    // for nav
    navigation: true,
    title: 'Dashboard',
  },
  {
    name: 'movie',
    path: '/movies',
    component: MovieList,
    exact: true,
    // for nav
    navigation: true,
    title: 'Movies',
  },
  {
    name: 'user',
    path: '/users',
    component: UserList,
    exact: true,
    // for nav
    navigation: true,
    title: 'Users',
  },
  {
    name: 'role',
    path: '/roles',
    component: RoleList,
    exact: true,
    // for nav
    navigation: true,
    title: 'Roles',
  },
  {
    name: 'permission',
    path: '/permissions',
    component: PermissionList,
    exact: true,
    // for nav
    navigation: true,
    title: 'Permissions',
  },
  {
    name: '404',
    path: '*',
    component: NotFount,
  },
]

export default routes
