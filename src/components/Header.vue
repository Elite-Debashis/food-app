<template>
  <header>
    <v-app-bar app color="white" height="55px" scroll-off-screen>
      <v-toolbar-title>
        FOOD PLANET
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'homeLink' }" tag="li"><v-btn text>HOME</v-btn></router-link>
      <router-link  :to="{ name: 'menuLink' }" tag="li"><v-btn text>MENU</v-btn></router-link>
      <router-link  :to="{ name: 'contactLink' }" tag="li"><v-btn text>CONTACT</v-btn></router-link>
      <router-link  :to="{ name: 'aboutLink' }" tag="li"><v-btn text>ABOUT</v-btn></router-link>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style scoped>
h1 {
  font-size: 1.3em;
}

.header_logo {
  background-size: 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.header_logo img {
  max-width: 25vw;
}

ul {
  padding: 10px 0;
}

li {
  display: inline-block;
}

@media screen and (min-width: 900px) {
  .header_logo img {
    max-width: 20vw;
  }
}
</style>
