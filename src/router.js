import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/auth/Login.vue';
import SignUp from './pages/auth/SignUp.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import Dashboard from './pages/Dashboard.vue';
import store from './vuex/store';

Vue.use(Router);

const router =  new Router({
  mode: "history",
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: { default: Dashboard, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: { requiresAuth: true } 
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: { default: SignUp, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  
});

router.beforeEach((to, from, next) => {  
  const isAuthenticated = localStorage.getItem('token'); // Adjust according to your state management  

  if (to.matched.some(record => record.meta.requiresAuth)) {  
    // The route requires authentication  
    if (isAuthenticated != null) {  
      next(); // Proceed to the route  
    } else {  
      next({  
        path: '/login', // Redirect to login if not authenticated  
        // query: { redirect: to.fullPath }, // Save the route user tried to access  
      });  
    }
  } else {  
    next(); // Proceed to the route  
  }  
});

export default router; 
