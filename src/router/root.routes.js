import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Signup from '@/pages/signup/Signup'
import Forum from '@/pages/forum/Forum'

const routes = [
  {
    path: '/',
    component: Home,
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
    path: '/forum',
    component: Forum,
    meta: {
      requiresAuth: true
    }
  },
]

export default routes