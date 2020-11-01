<template>
  <v-container style="margin-top: 50px;" class="fill-height" fluid>
    <v-row style="align-content: center; justify-content: center">
      <v-col cols="12" sm="8" md="4">
       <v-card class="elevation-12">
         <v-toolbar color="#892cdc" dark flat>
           <v-toolbar-title>CONTACT US</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
           <v-card-title>FOOD PLANET</v-card-title>
           <v-card-subtitle style="margin-top: 1px">ADDRESS 1</v-card-subtitle>
           <v-card-subtitle style="margin-top: -20px">ADDRESS 2</v-card-subtitle>
           <v-card-subtitle style="margin-top: -20px">EMAIL ID : foodplanet@gmail.com</v-card-subtitle>
           <v-card-subtitle style="margin-top: -20px">PHONE NO: 7894567525</v-card-subtitle>
           <h3 style="margin-left: 10px">DROP A MESSAGE</h3>
           <v-form>
             <v-text-field
                 style="margin-left: 10px"
             label="Name"
             >
             </v-text-field>
             <v-text-field
                 style="margin-left: 10px"
                 label="Phone No"
                 type="number"
             >
             </v-text-field>
             <v-text-field
                 style="margin-left: 10px"
                 label="Email"
                 type="email"
             >
             </v-text-field>
           </v-form>
         </v-card-text>
         <v-card-actions>
           <v-btn
           block
           color="#892cdc"
           >SEND</v-btn>
         </v-card-actions>
       </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog:false
    }
  },
  name: "contact"
};
</script>

<style>
.contact_wrapper {
  background: #f1e6da;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}
</style>

