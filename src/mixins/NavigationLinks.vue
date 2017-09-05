
<script>
  export default {
    name: 'navigation-links-mixin',
    data() {
      return {
        activeIndex: '1',
        guestLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forum', path: '/forum' },
          { id: 3, name: 'Login', path: '/login' },
          { id: 4, name: 'Signup', path: '/signup' },      
          { id: 5, name: 'Chat', path: '/chat' },      
          { id: 6, name: 'Products', path: '/products' },
        ],
        authLinks: [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Forums', path: '/forums' },
          { id: 3, name: 'Chat', path: '/chat' },      
          { id: 4, name: 'Settings', path: '/account' },
          { id: 5, name: 'Login', path: '/login' },
          { id: 6, name: 'Signup', path: '/signup' },      
          { id: 7, name: 'Products', path: '/products' },
        ],
      };
    },
  }
</script>