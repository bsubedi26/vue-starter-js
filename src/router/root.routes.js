import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Signup from '@/pages/signup/Signup'

const routes = [
  {
    path: '/home',
    component: Home,
    // meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default routes