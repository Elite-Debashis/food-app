
<template>
  <div class="menu_wrapper">
    <!-- menu -->
<!--    <div class="menu">-->
<!--      <h3>~ Authenic handmade pizza ~</h3>-->
<!--      <table>-->
<!--        <tbody v-for="item in getMenuItems" :key="item.id">-->
<!--          <tr>-->
<!--            <td>-->
<!--              <strong>~ {{ item.name }} ~</strong>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>-->
<!--              <small>{{ item.description }}</small>-->
<!--            </td>-->
<!--          </tr>-->
<!--          <tr v-for="(option, index) in item.options" :key="option[index]">-->
<!--            <td>{{ option.size }}"</td>-->
<!--            <td>{{ option.price | currency}}</td>-->
<!--            <td>-->
<!--              <button type="button" class="btn_green" @click="addToBasket( item, option )">+</button>-->
<!--            </td>-->
<!--          </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
    <v-container style="margin-top: 55px">
      <h2 class="text-h2">Cart</h2>
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
                                              style="margin-top: -28px; margin-left: -12px; font-size: 14px"
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
      <h2 class="text-h2">Orders</h2>
      <v-card><v-card-title>Orders Here</v-card-title>
      <v-card-subtitle>THIS IS SUBTITLE</v-card-subtitle>
      </v-card>
    </v-container>

    <!-- shopping basket -->
<!--    <div class="basket">-->
<!--      <h3>~ Basket ~</h3>-->
<!--      <div v-if="basket.length > 0">-->
<!--        <table>-->
<!--          <tbody v-for="(item, index) in basket" :key="index">-->
<!--            <tr>-->
<!--              <td>-->
<!--                <button @click="decreaseQuantity(item)" class="btn_green" type="button">&#8722;</button>-->
<!--                <span>{{ item.quantity }}</span>-->
<!--                <button @click="increaseQuantity(item)" class="btn_green" type="button">&#43;</button>-->
<!--              </td>-->
<!--              <td>{{ item.name }} {{ item.size }}"</td>-->
<!--              <td>{{ item.price * item.quantity | currency}}</td>-->
<!--            </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--        <p>Order total: {{ total | currency }}</p>-->
<!--        <button class="btn_green" @click="addNewOrder">Place Order</button>-->
<!--      </div>-->
<!--      &lt;!&ndash; v-if &ndash;&gt;-->
<!--      <div v-else>-->
<!--        <p>{{ basketText }}</p>-->
<!--      </div>-->
<!--    </div>-->
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
      basketText: "Your basket is empty!"
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