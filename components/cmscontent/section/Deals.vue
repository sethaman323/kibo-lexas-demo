<template>
  <div>
    <div class="top-grid">
      <div class="for-Title">
        {{ section.title }}
      </div>
      <div class="item-grid">
        <div
          v-for="(dealsItem, i) in section.dealsItem"
          :key="i.id"
          class="the-items"
        ><ul class="item-elements">
              <p class="for-Badges">{{dealsItem.offerTitle}}</p>
           <img
            v-bind:src="dealsItem.image.url"/>
        
          <li class="for-list"> {{ dealsItem.title }}</li>
          <li class="for-list">  Item #:{{ dealsItem.itemId }}</li>
           <li class="for-list"> Mfr #:{{ dealsItem.mfrId }}</li>
           <li><span class="for-price"> {{dealsItem.price}}</span><span style="font-weight: bold;">{{dealsItem.salePrice}}</span></li>
           </ul>
        </div>
      </div>
      <!-- <SfAddToCart :disabled="false" :qty="1" /> -->
    </div>
  </div>
</template>

<script>
import { SfCard } from "@storefront-ui/vue";
import { SfAddToCart } from "@storefront-ui/vue";

export default {
  components: {
    SfCard,
    SfAddToCart,
  },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.top-grid {
  display: grid;
}
.item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 5px 5px 82px 100px;
  column-gap: 20px;
}
.for-Title {
  height: 43px;
  margin: 5px 5px 82px 100px;
  font-family: 'Poppins';
  font-size: 30px;
   font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  /* text-align: center; */
  color: #4d4d4f;
}
.the-items{
      width: 200px;
    height: 424px;
    /* padding: 39px 30px 31px 31px; */
    border-radius: 5px;
   border-radius: 5px;
  background-color: #f5f5f5;
    font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #3c3c3c;
}
.the-items:hover{
   box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}

.for-list{
  padding: 10px 0px 10px 0px;
}

.for-price{
  padding-right: 10px;
    padding-left: 10px;
     text-decoration: line-through;
}
.for-Badges{
  position: relative;
    top: -43px;
    left: 30px;
    z-index: 1;
    width: 55px;
    height: 24px;
    /* margin: 50px 17.4px 512px 0.7px; */
    /* padding: 2px 19px; */
    padding-left: 25px;
    border-radius: 20px;
    background-color: #f00;
    padding-top: 5px;
    font-family: Poppins;
  font-size: 14px;
   color: #fff;
}


.item-elements{
  list-style: none;
  padding-left: 0px;
  padding: 4px 30px 31px 31px;
}
</style>