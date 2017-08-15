import Home from 'components/home/home';
import Posts from 'components/posts/posts';
import Post from 'components/posts/post';
import CreatePost from 'components/posts/createPost';
import EditPost from 'components/posts/editPost';
import NotFound from 'components/notFound/notFound';
import Login from 'components/login/login';
import Signup from 'components/signup/signup';
import Chat from 'components/chat/chat';

const routes = [
  {
    path: '/chat',
    component: Chat
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
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
