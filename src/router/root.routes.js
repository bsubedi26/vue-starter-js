import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Signup from '@/pages/signup/Signup'
import Forum from '@/pages/forum/Forum'
import Chat from '@/pages/chat/Chat'

const routes = [
  {
    path: '/chat',
    component: Chat,
    meta: {
      // requiresAuth: true
    }
  },
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