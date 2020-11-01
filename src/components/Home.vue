<template>
  <v-container class="default-font" fluid>
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
  </v-container>
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
        title: 'HOW TO ORDER',
        subTitle: 'FOLLOW OUR ORDER GUIDE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'FAST DELIVERY',
        subTitle: 'WE HAVE THE FASTEST POSSIBLE DELIVERY',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'QUALITY FOOD',
        subTitle: 'WE PROVIDE HYGIENE AND GOOD QUALITY FOOD',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TRY TODAY',
        subTitle: 'GOT HUNGRY? ORDER TODAY',
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
