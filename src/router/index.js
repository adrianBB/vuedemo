import Vue from 'vue'
import Router from 'vue-router'
const Hello = r => require.ensure([], () => r(require('@/components/Hello.vue')), 'Hello')

const Home = r => require.ensure([], () => r(require('@/pages/home/Home.vue')), 'Home')

const My = r => require.ensure([], () => r(require('@/pages/my/my.vue')), 'My')

const Category = r => require.ensure([], () => r(require('@/pages/category/category.vue')), 'Category')

const Cart = r => require.ensure([], () => r(require('@/pages/cart/cart.vue')), 'Cart')

const List = r => require.ensure([], () => r(require('@/pages/list/list.vue')), 'List')

const Login = r => require.ensure([], () => r(require('@/pages/login/login.vue')), 'Login')

const Detail = r => require.ensure([], () => r(require('@/pages/detail/detail.vue')), 'Detail')

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/my',
      name:'My',
      component: My
    },
     {
      path:'/category',
      name:'Category',
      component: Category
    },
     {
      path:'/cart',
      name:'Cart',
      component: Cart
    },
    {
      path:'/list/:id',
      name:'List',
      component: List
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component: Detail
    },
  ]
})
