<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-flow-outline"
      title="Change Orders"
      class="px-5 py-3"
    >
      
      <v-data-table
        :headers="headers"
        :items="order_items"
        >

        <template v-slot:item.change_order="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="view_change_order(item)"
            >
              mdi-pencil
            </v-icon>

        <v-dialog
            v-model="dialog"
            max-width="500px"
          >
          <v-card>
              <v-card-title>
                <span class="headline">Change Order</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="selected_change_order.customer_name"
                        label="Customer Name"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="selected_change_order.change_order_type"
                        label="Change Type"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="selected_change_order.change_order_customer_note"
                        label="Customer comments"
                        disabled
                      ></v-textarea>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="selected_change_order.change_order_staff_note"
                        label="Additional Notes From Boulder staff (Attached to Email)"
                      ></v-textarea>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="selected_change_order.change_order_cost"
                        label="Cost"
                        disabled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                 
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
               
                <v-btn
                  color="blue darken-1"
                  text
                  @click="approve"
                >
                  Approve
                </v-btn>
                 <v-btn
                  color="blue darken-1"
                  text
                  @click="decline"
                >
                  Decline
                </v-btn>
                 <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-dialog>


        </template>

        

        </v-data-table>

    </base-material-card>



  </v-container>
</template>


<script>
export default {
    name: 'StaffChangeOrder',
    data () {
      return {
        dialog: false,
        headers: [
            {
            text: 'Customer Name',
            sortable: false,
            class:"primary--text",
            value: 'customer_name',
            },
            { 
            text: 'Change Order Type', 
            value: 'change_order_type', 
            sortable: false,
            class:"primary--text",
            },
            { 
            text: 'Approve/Reject', 
            value: 'change_order', 
            align: 'end',
            sortable: false,
            class:"primary--text",
            }
        ],
        order_items: [
          {
            customer_id:1,
            customer_name: 'Jon Carlson',
            change_order_id:1,
            change_order_type: 'Patio Size',
            change_order_customer_note: 'We would like to upgrade Patio size',
            change_order_staff_note: '',
            change_order_cost:500
          },
          {
            customer_id:2,
            customer_name: 'Ashley Rose',
            change_order_id:2,
            change_order_type: 'Add Garage Drain',
            change_order_customer_note: 'We would like to add garage drain',
            change_order_staff_note: '',
            change_order_cost:500
          },
          {
            customer_id:3,
            customer_name: 'Beth Gilleland',
            change_order_id:3,
            change_order_type: 'Patio Size',
            change_order_customer_note: 'We would like to upgrade patio size',
            change_order_staff_note: '',
            change_order_cost:500
          }
        ],
        selected_change_order: {
            customer_id:0,
            customer_name: '',
            change_order_id:0,
            change_order_type: '',
            change_order_customer_note: '',
            change_order_staff_note: '',
            change_order_cost:0
        },
        default_change_order: {
            customer_id:0,
            customer_name: '',
            change_order_id:0,
            change_order_type: '',
            change_order_customer_note: '',
            change_order_staff_note: '',
            change_order_cost:0
        },
      }
    },

    methods: {
        view_change_order (change_order) {
          this.selected_change_order = Object.assign({}, change_order)
          console.log(this.selected_change_order),
          this.dialog = true
        },
        
        close () {
          this.dialog = false
          this.$nextTick(() => {
          this.selected_change_order = Object.assign({}, this.default_change_order)
          })
        },
        approve ()
        {
          this.dialog = false
          this.$nextTick(() => {
          this.selected_change_order = Object.assign({}, this.default_change_order)
          })
        },
        decline()
        {
          this.dialog = false
          this.$nextTick(() => {
          this.selected_change_order = Object.assign({}, this.default_change_order)
          })
        }

    },

}
</script>