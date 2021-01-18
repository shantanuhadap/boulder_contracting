<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-flow-outline"
      title="Action Items"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              Action Item
            </th>
            <th class="text-right primary--text">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(actionitem, i) in actionitems"
          :key="`item-${i}`"
          >
            <td>{{actionitem.action_item}}</td>
            <td class="text-right">
              {{actionitem.count}}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>



  </v-container>
</template>

<script>
export default {
  name: 'StaffDashboard',
  data () {
      return {
        actionitems: [
          {
            action_item: 'Change orders that need attention',
            count: '1',
          },
          {
            action_item: 'Purchase agrrements awaiting customer signiture',
            count: '2',
          },
          {
            action_item: 'Home selections awaiting customer signiture',
            count: '3',
          },
          {
            action_item: 'Vendor selections awaiting customer signiture',
            count: '4',
          }
        ],
      }
    }
}
</script>
