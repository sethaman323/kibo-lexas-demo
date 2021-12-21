<template>
  <div>
    <div class="Card">
      <div class="Shop-By-Category">
        {{ section.contentTitle }}
      </div>
      <div class="gridforcategory">
        <div
          v-for="(items, i) in section.items"
          :key="i.id"
          class="for-Each-item"
        >
          <img
            v-bind:src="items.image.url"
            alt="Girl in a jacket"
            class="item-Image"
             width: 66px;
  height: 120px;
          />
        <span class="item-title"> {{ items.title }}</span>
        </div>
      </div>
    </div>

    <SfBannerGrid />
  </div>
</template>

<script>
import SfBannerGrid from "@storefront-ui/vue";
export default {
  components: {
    SfBannerGrid,
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
.Card {
  /* width: 1079px;
  height: 600px; */
  display: grid;
}

.Shop-By-Category {
  /* width: 268px; */
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

.gridforcategory {
  display: grid;
  margin-right: 100px;
  margin-left: 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 13px;
  
}

.for-Each-item {
  display: grid;
  border-radius: 5px;
  background-color: #f5f5f5;
  justify-content: center;
}
.for-Each-item:hover{
   box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
}
.item-Image {
  margin: 35px 13px 20px 13px;
}
.item-title{
 
      margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 81px;
    margin-right: 81px;
     font-family: 'Poppins';
  font-size: 18px;
 
  font-stretch: normal;
  font-style: normal;
  line-height: 1.28;
  letter-spacing: normal;
  text-align: center;
  color: #3c3c3c;
}
</style>