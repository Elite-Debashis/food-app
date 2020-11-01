<template>
  <div id="app" class="default-font">
    <app-header></app-header>
    <router-view></router-view>
    <div class="info_block_wrapper ">
      <div v-for="(card,i) in cards" :key="i" style="margin-top: 50px">
        <ordering-guide :card="card"></ordering-guide>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { dbMenuRef, dbOrdersRef } from "./firebase";
import OrderingGuide from "@/components/OrderingGuide";
export default {
  name: "app",
  components: {
    // should not use reserved header element name
    appHeader: Header,
    orderingGuide: OrderingGuide
  },
  created() {
    this.$store.dispatch("setMenuRef", dbMenuRef);
    this.$store.dispatch("setOrdersRef", dbOrdersRef);
  },
  data() {
    return {
      cards: [
          {
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus sit laudantium doloremque ipsum dolor, quibusdam quas ullam delectus at.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus sit laudantium doloremque ipsum dolor, quibusdam quas ullam delectus at.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus sit laudantium doloremque ipsum dolor, quibusdam quas ullam delectus at.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },{
        title: 'TITLE',
        subTitle: 'SUBTITLE',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus sit laudantium doloremque ipsum dolor, quibusdam quas ullam delectus at.',
        url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg'
      },

      ]
    }
  }
};
</script>

<style>
body {
  font-family: "Crimson Text", serif;
  margin: 0;
  font-size: 1.5em;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: #f1e6da;
}
li {
  list-style: none;
}
span {
  margin: 0 5px;
}
input,
textarea {
  font-size: 1.1rem;
}
button {
  border: none;
  font-size: 1.1rem;
}
.btn_green {
  background: rgb(101, 168, 101);
}
.btn_red {
  background: rgb(241, 70, 70);
}
.info_block_wrapper {
  display: flex;
  flex-direction: column;
}
.info_block {
  background: #f1e6da;
  margin: 10px 0;
  padding: 10px;
}
.info_block > h3 {
  text-align: center;
}
.info_block_content {
  display: flex;
  align-items: center;
}
.info_block img {
  width: 30%;
}
@media screen and (min-width: 900px) {
  .info_block {
    width: 100%;
  }
  .info_block_wrapper {
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    align-content: space-between;
  }
  .info_block:nth-child(2) {
    margin: 10px;
  }
  .info_block:nth-child(2) img {
    /* middle info block has image second in source order on small screens
    this will move the image back on top of text for large screens */
    order: -1;
  }
  .info_block_content {
    flex-direction: column;
    align-items: center;
  }
  .info_block img {
    max-width: 100%;
  }
}
@font-face {
  font-family: Itim;
  src: url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
}
 .default-font {
font-family: Itim;
 }

</style>
