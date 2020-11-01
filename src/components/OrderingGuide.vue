<template>
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
    <v-card-subtitle style="margin-top: -20px">{{card.subTitle}}</v-card-subtitle>
    <v-card-text>{{card.text}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "orderingGuide",
  props:['card']
};
</script>


