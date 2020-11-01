<template>
<!--  <div class="info_block">-->
<!--    <h3>~ How to order ~</h3>-->
<!--    <div class="info_block_content">-->
<!--      <img src="../assets/images/order.png" alt="how to order image" />-->
<!--      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit error libero neque, vero quidem repellat itaque, molestiae amet beatae, harum delectus omnis ipsum officia! Aliquam mollitia ab earum repellat laborum.</p>-->
<!--    </div>-->
<!--  </div>-->
  <v-card
  class="mx-auto"
  width="300"
  height="400"
  style="margin: 10px"
  elevation="5"

  >
    <v-img
    class="white--text align-end"
    :src="card.url"
    >

    </v-img>
    <v-card-title>{{ card.title }}</v-card-title>
    <v-card-subtitle>{{card.subTitle}}</v-card-subtitle>
    <v-card-text>{{card.text}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "orderingGuide",
  props:['card']
};
</script>


