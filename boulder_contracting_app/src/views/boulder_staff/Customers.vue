<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-account-multiple"
      title="Customers Table"
      class="px-5 py-3"
    >
    
        <v-data-table
        :headers="headers"
        :items="customers"
        >
        
        <template v-slot:item.customer="{ item }">
            <v-btn
                color="success"
                class="mr-0"
                @click="view_customer(item)"
            >
                View 
            </v-btn>
        </template>
        </v-data-table>

    </base-material-card>
  </v-container>
</template>


<script>
export default {
    name: 'DashboardCustomers',
    data () {
      return {

        headers: [
            {
            text: 'Customer Name',
            sortable: false,
            class:"primary--text",
            value: 'customer_name',
            },
            { 
            text: 'View', 
            value: 'customer', 
            align: 'end',
            sortable: false,
            class:"primary--text",
            }
        ],
      
        customers: [
          {
            customer_id:1,
            customer_name: 'Jon Carlson',
          },
          {
            customer_id:2,
            customer_name: 'Ashley Rose',
          },
          {
            customer_id:3,
            customer_name: 'Beth Gilleland',
          }
        ],

        selected_customer: {
            customer_id:0,
            customer_name: '',
        },
        
      }
    },

    methods: {
        view_customer (customer) {
          this.selected_customer = Object.assign({}, customer)
          console.log(this.selected_customer)
        },
    }
}
</script>