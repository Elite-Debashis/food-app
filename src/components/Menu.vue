
<template>
  <div class="menu_wrapper">

    <v-container class="default-font" style="margin-top: 55px">
      <h2 class="text-h2">MENU</h2>
       <v-card
           class="mx-auto"
           elevation="2"
           style="margin-bottom: 10px"
           v-for="item in getMenuItems"
           :key="item.id"
       >
         <v-col>
           <v-row>
             <v-list-item>
               <v-col>
                 <v-row>
                   <v-list-item-icon style="margin-top: -5px">
                     <v-card class="rounded-lg mx-auto" style="padding: 2px"><v-img src="https://wallpaperaccess.com/full/767033.jpg"
                                                                                    width="90"
                                                                                    height="90"
                     >
                     </v-img></v-card>
                   </v-list-item-icon>
                   <v-list-item-content>
                     <v-col>
                       <v-list-item-title class="text-wrap"
                                          style="margin-top: -28px"
                       >
                         {{ item.name }}
                       </v-list-item-title>
                       <v-list-item-content>
                         <v-col>
                           <v-list-item-subtitle class="text-wrap"
                                              style="margin-top: -25px; margin-left: -12px; font-size: 14px"
                           >
                             {{item.description}}
                           </v-list-item-subtitle>
                           <v-row>
                          <div v-for="(option, index) in item.options" :key="option[index]">
                            <v-btn outlined x-small style="margin-right: 5px" @click="addToBasket(item, option)">ADD VARIANT {{option.size}}</v-btn>
                          </div>
                           </v-row>
                         </v-col></v-list-item-content>
                     </v-col></v-list-item-content>
                 </v-row>
               </v-col>
             </v-list-item>
           </v-row>
         </v-col>
       </v-card>
      <h2 class="text-h2">BASKET</h2>
      <div v-if="basket.length > 0">
        <v-card
            class="mx-auto"
            elevation="2"
            style="margin-bottom: 10px;margin-top: 20px"
            v-for="(item, index) in basket"
            :key="index"
        >
          <v-col>
            <v-row>
              <v-list-item>
                <v-col>
                  <v-row>
                    <v-list-item-content>
                      <v-col>
                        <v-list-item-title class="text-wrap" style="margin-top: -25px">
                          ITEM NAME : {{item.name}}
                        </v-list-item-title>
                        <v-list-item-subtitle>ITEM VARIANT: {{item.size}}</v-list-item-subtitle>
                        <div class="text-center float-left"
                             style="margin-left: -8px; margin-top: 10px"
                        >
                          <v-btn
                              class="mx-2"
                              height="25px"
                              width="25px"
                              outlined
                              fab
                              @click="decreaseQuantity(item)"
                          >
                            -
                          </v-btn>
                          <v-list-item-action-text>
                          <span>
                            Qty: {{item.quantity}}
                          </span>
                          </v-list-item-action-text>
                          <v-btn
                              class="mx-2"
                              height="25px"
                              width="25px"
                              outlined
                              fab
                              @click="increaseQuantity(item)"
                          >
                            +
                          </v-btn>
                        </div>
                        <v-list-item-subtitle style="float: right">{{item.price * item.quantity | currency}}</v-list-item-subtitle>
                      </v-col>
                    </v-list-item-content>
                  </v-row>
                </v-col>
              </v-list-item>
            </v-row>
          </v-col>
        </v-card>
        <v-btn v-if="basket.length > 0" @click="addNewOrder" flat block color="#892cdc"><span style="color: #dddddd">PLACE ORDER</span></v-btn></div>
      <v-row
      style="align-content: center; justify-content: center; margin-top: 10%"
      fill-height
      v-else
      >
        <v-card
            justify="center"
        align="center"
        class="rounded-lg"
        >
         <v-img src="https://freepikpsd.com/wp-content/uploads/2019/10/empty-cart-png-Transparent-Images.png"
         height="200"
                width="200"
         >
           <v-layout
           slot="placeholder"
           fill-height
           align-center
           justify-center
           ma-0
           >
             <v-progress-circular
                 indeterminate
                 color="grey lighten-5"
             ></v-progress-circular>
           </v-layout>
         </v-img>
          <p style="font-size: 110%"><strong>{{ basketText }}</strong></p>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store } from "../store/store.js";

export default {
  name: "appMenu",
  data() {
    return {
      basket: [],
      basketText: "Hungry???Go for some food now!"
    };
  },
  computed: {
    ...mapGetters(["getMenuItems"]),
    total() {
      let totalCost = 0;
      this.basket.map(item => {
        totalCost += item.quantity * item.price;
      });
      return totalCost;
    }
  },
  methods: {
    async addToBasket(item, option) {
      const pizzaExists = await this.basket.find(
        pizza => pizza.name === item.name && pizza.size === option.size
      );
      if (pizzaExists) {
        pizzaExists.quantity++;
        return;
      }
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      });
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
    },
    addNewOrder() {
      const order = {
        createdAt: new Date(),
        pizzas: { ...this.basket }
      };
      store.dispatch("addNewOrder", order);
      this.basket = [];
      this.basketText = "Thank you, your order has been placed!";
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.menu_wrapper {
  display: flex;
  flex-direction: column;
}

.menu,
.basket {
  background: #f1e6da;
  border-radius: 3px;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}

@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .menu {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
}
</style>