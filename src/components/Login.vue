<template>
<!--  <div style="margin-top: 100px" class="login_wrapper">-->
<!--    <p>Please login to continue:</p>-->

<!--    <form>-->
<!--      <div>-->
<!--        <label>Email address</label>-->
<!--        <input type="email" id="email" placeholder="Enter email" v-model="email" />-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>Password</label>-->
<!--        <input type="password" id="password" placeholder="Password" v-model="password" />-->
<!--      </div>-->
<!--      <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>-->
<!--    </form>-->
<!--  </div>-->
    <v-container style="margin-top: 50px; " class="fill-height" fluid>
      <v-row style="align-content: center; justify-content: center;">
       <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="#892cdc" dark flat>
              <v-toolbar-title>LOGIN</v-toolbar-title>
            </v-toolbar>
          </v-card>
         <v-card-text>
           <v-form>
             <v-text-field
                 label="Email or Username"
                 name="Email"
                 v-model="email"
                 required
                 type="email"
             >
             </v-text-field>
           </v-form>
         </v-card-text>
         <v-card-text>
           <form>
             <v-text-field
                 label="Password"
                 name="Password"
                 v-model="password"
                 required
                 type="password"
             >
             </v-text-field>
           </form>
         </v-card-text>
         <v-card-actions>
           <v-spacer>
           </v-spacer>
           <v-btn
           @click.prevent="signIn"
           block
           color="#892cdc"
           ><span style="color: #dddddd">SIGN IN</span></v-btn>
         </v-card-actions>
       </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { store } from "../store/store.js";
import Firebase from 'firebase'

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password
      };
      store.dispatch("signIn", user);
    },
    signOut() {
      Firebase.auth().signOut().then(function() {
        alert('logged out');
      }).catch(function(error) {
        alert(error);
      })
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
};
</script>

<style scoped>
</style>