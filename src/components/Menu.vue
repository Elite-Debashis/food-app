
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
         <v-img src="data:image/jpeg;base64,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"
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