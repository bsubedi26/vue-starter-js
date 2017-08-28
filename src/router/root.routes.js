import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Signup from '@/pages/signup/Signup'
import Chat from '@/pages/chat/Chat'

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
    path: '/chat',
    component: Chat
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default routes