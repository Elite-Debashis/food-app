<template>
  <header>
<!--    <div class="header_logo">-->
<!--      <img src="../assets/images/planet.png" alt="pizza planet icon" />-->
<!--      <h1 class href="/">PIZZA PLANET</h1>-->
<!--    </div>-->
<!--    <nav>-->
<!--      <ul>-->
<!--        <router-link :to="{ name: 'homeLink' }" tag="li">-->
<!--          <a>home</a>-->
<!--        </router-link>-->
<!--        <span>~</span>-->
<!--        <router-link :to="{ name: 'menuLink' }" tag="li">-->
<!--          <a>menu</a>-->
<!--        </router-link>-->
<!--        <span>~</span>-->
<!--        <router-link :to="{ name: 'contactLink' }" tag="li">-->
<!--          <a>contact us</a>-->
<!--        </router-link>-->
<!--        <span>~</span>-->
<!--        <router-link :to="{ name: 'aboutLink' }" tag="li">-->
<!--          <a>about us</a>-->
<!--        </router-link>-->
<!--      </ul>-->
<!--    </nav>-->
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
