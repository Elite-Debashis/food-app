<template>
  <v-container-fluid>
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

  <div class="info_block_wrapper ">
    <div v-for="(card,i) in cards" :key="i" style="margin-top: 50px">
      <ordering-guide :card="card"></ordering-guide>
    </div>

  </div>
  </v-container-fluid>
</template>

<script>
import OrderingGuide from "@/components/OrderingGuide";

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
    ],
    cards: [
      {
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },

    ],
  }),
  name: "home",
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    }
  },
  components: {
    orderingGuide: OrderingGuide
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
