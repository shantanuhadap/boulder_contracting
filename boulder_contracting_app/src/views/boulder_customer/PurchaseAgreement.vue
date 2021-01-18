<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
        class="text-right"
      >
        <base-material-card
        icon="mdi-file-document-edit-outline"
        title="Purchase Agreement"
        class="px-5 py-3">
         
        <v-btn
            color="success"
            class="mr-0"
        >
            Sign Document 
        </v-btn>


        </base-material-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>

    export default {
        name: 'CustomerPurchaseAgreement',
    }
</script>
