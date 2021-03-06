<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <!-- <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template> -->

    <v-divider class="mb-2" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-icon
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="50"
            max-width="40"
          />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            class="display-1"
            v-text="company.title"
          />
        </v-list-item-content>

      </v-list-item>
    </v-list>

    
    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <div />

        <template v-for="(item, i) in computed_drawer_staff_items">
          
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
          </base-item-group>

          <base-item
            v-else
            :key="`item-${i}`"
            :item="item"
          />

        </template>

      <div />
    
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <div />

        <template v-for="(item, i) in computed_drawer_customer_items">
          
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
          </base-item-group>

          <base-item
            v-else
            :key="`item-${i}`"
            :item="item"
          />

        </template>

      <div />
    
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      drawer_staff_items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: '/',
        },
        {
          icon: 'mdi-account-multiple',
          title: 'customers',
          to: '/boulder_staff/customers',
        },
        {
          icon: 'mdi-account-plus',
          title: 'newcustomers',
          to: '/boulder_staff/new-customer',
        },
        {
          icon: 'mdi-clipboard-flow-outline',
          title: 'changeorders',
          to: '/boulder_staff/change-orders',
        }
      ],

      drawer_customer_items: [
        {
          icon: 'mdi-file-document-edit-outline',
          title: 'customerpurchaseagreement',
          to: '/boulder_customer/purchase-agreement',
        },
        {
          icon: 'mdi-home-search-outline',
          title: 'customerhomeselections',
          to: '/boulder_customer/home-selections',
        },
        {
          icon: 'mdi-home-city-outline',
          title: 'customervendorselection',
          to: '/boulder_customer/vendor-selection',
        },
        {
          icon: 'mdi-clipboard-flow-outline',
          title: 'customerchangeorder',
          to: '/boulder_customer/change-order',
        },
        {
          icon: 'mdi-home-edit-outline',
          title: 'customerhomedesign',
          to: '/boulder_customer/home-design',
        },
        {
          icon: 'mdi-upload',
          title: 'customeruploads',
          to: '/boulder_customer/uploads',
        },
        {
          icon: 'mdi-currency-usd',
          title: 'customercostbreakdown',
          to: '/boulder_customer/cost-breakdown',
        },
       
      ],

    }),

    computed: {
      ...mapState(['barColor']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },

      computed_drawer_staff_items () {
        return this.drawer_staff_items.map(this.mapItem)
      },

      computed_drawer_customer_items () {
        return this.drawer_customer_items.map(this.mapItem)
      },

      company () {
        return {
          // avatar: true,
          title: this.$t('companyname'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
