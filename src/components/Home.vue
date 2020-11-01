<template>
  <v-carousel v-model="model" hide-delimiter-background :show-arrows="false">
    <v-carousel-item v-for="(slide) in slides" :key="slide.title">

      <v-img :src="require('../assets/images/pizza1.jpg')">
        <v-container
            fill-height
            fluid
            pa-0 ma-0

        >
          <v-layout fill-height align-end>
            <v-flex xs12>
              <v-card color="red" class="pa-2" >
                <span class="headline white--text" v-text="slide.title">                               </span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data:() => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    slides: [
      {
        title: "TITLE 1",
        url: '../assets/images/pizza1.jpg'
      },
      {
        title: "TITLE 2",
        url: '../assets/images/pizza2.jpg'
      },
      {
        title: "TITLE 3",
        url: '../assets/images/pizza3.jpg'
      }
    ]
  }),
  name: "home",
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style>
/*h1,*/
/*h2 {*/
/*  margin: 2%;*/
/*}*/

/*.background {*/
/*  background: url("../assets/images/dough.jpg") center;*/
/*  background-size: cover;*/
/*  height: 30vh;*/
/*  display: flex;*/
/*  text-align: center;*/
/*  !* vertically align box center *!*/
/*  align-items: center;*/
/*}*/

/*.background-overlay {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  background: #f1e6da;*/
/*  opacity: 0.8;*/
/*  width: 50%;*/
/*  margin: 0 auto;*/
/*  padding: 5px;*/
/*  align-items: center;*/
/*}*/

/*.background-overlay > img {*/
/*  max-width: 15%;*/
/*}*/

/*.order_btn {*/
/*  background: #f79f38;*/
/*  border-radius: 3px;*/
/*  margin-bottom: 10px;*/
/*  padding: 10px;*/
/*  cursor: pointer;*/
/*}*/
</style>
