import Home from '@/pages/Home'
import Login from '@/pages/user/Login'
import Signup from '@/pages/user/Signup'
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
  },
]

export default routes