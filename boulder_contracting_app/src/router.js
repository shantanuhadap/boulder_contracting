import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/',
          component: () => import('@/views/boulder_staff/Dashboard'),
        },
        // Customers
        {
          name: 'Customers',
          path: '/boulder_staff/customers',
          component: () => import('@/views/boulder_staff/Customers'),
        },
        // New Customers
        {
          name: 'New Customer',
          path: '/boulder_staff/new-customer',
          component: () => import('@/views/boulder_staff/NewCustomer'),
        },
        // Change Orders
        {
          name: 'Change Orders',
          path: '/boulder_staff/change-orders',
          component: () => import('@/views/boulder_staff/ChangeOrders'),
        }
      ],
    },
  ],
})
