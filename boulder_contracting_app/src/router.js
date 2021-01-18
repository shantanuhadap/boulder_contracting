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


        // Staff Section

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
        },


        //Customer Section

        {
          name: 'Purchase Agreement',
          path: '/boulder_customer/purchase-agreement',
          component: () => import('@/views/boulder_customer/PurchaseAgreement'),
        },
        {
          name: 'Home Selections',
          path: '/boulder_customer/home-selections',
          component: () => import('@/views/boulder_customer/HomeSelections'),
        },
        {
          name: 'Vendor Selection',
          path: '/boulder_customer/vendor-selection',
          component: () => import('@/views/boulder_customer/VendorSelection'),
        },
        {
          name: 'Change Order',
          path: '/boulder_customer/change-order',
          component: () => import('@/views/boulder_customer/ChangeOrder'),
        },
        {
          name: 'Home Design',
          path: '/boulder_customer/home-design',
          component: () => import('@/views/boulder_customer/HomeDesign'),
        },
        {
          name: 'Uploads',
          path: '/boulder_customer/uploads',
          component: () => import('@/views/boulder_customer/Uploads'),
        },
        {
          name: 'Cost Breakdown',
          path: '/boulder_customer/cost-breakdown',
          component: () => import('@/views/boulder_customer/CostBreakdown'),
        },

        
        

      ],
    },
  ],
})
