import Home from '@/pages/Home'
import Login from '@/pages/user/Login'
import Signup from '@/pages/user/Signup'

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
]

export default routes