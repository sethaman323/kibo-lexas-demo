<template>
  <div>
    <div class="Banner">
     
        <div class="text">
          <div class="fortitle">
            {{ section.title }}
          </div>
          <div class="grid2">
          <div class="shopnow">{{ section.lInktitle }}</div>
          <img  class="Ellipse-48" v-bind:src=section.arrow.url alt="Girl in a jacket" height="20px" width="20px">
          </div>
       
      </div>
      <img
        v-bind:src="section.backgroundImage.url"
        alt="Girl in a jacket"
        width="1280px"
        height="332px"
      />
    </div>

    <SfBanner
      :title="section.title"
      :image="section.backgroundImage.url"
      :linktitle="section.lInktitle"
      :arrow="section.arrow"
    />
  </div>
</template>

<script>
import SfBanner from "@storefront-ui/vue";
export default {
  components: {
    SfBanner,
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
.Banner {
  text-align: center;
  position: relative;
  opacity: 0.8;
  /* background-color: #000; */
  /* padding: 31.7px 624px 59.7px 100px; */
  width: 1240px;
  height: 332px;
  margin: 50px 0;
}

.shopnow {
     /* grid-row: 1;
    grid-column: 2/2; */
     grid-area: header;
  width: 79px;
  height: 19px;
  margin: 10px 0 10px 22px;
  font-family: 'Poppins';
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.fortitle{
  
    margin: 0 0 36.5px;
}

.text {
  
  display: grid;
  
  position: absolute;
  width: 556px;
  height: 165px;
  margin: 36.5px;
  font-family: "Poppins";
  font-size: 54px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color:#ffffff;
}

.grid2{
      display: grid;
    grid-template-columns: 30px 70px;
    
    grid-template-areas: "main header";
}
.Ellipse-48 {
     /* grid-row: 1;
    grid-column: 1/2; */
        grid-area: main;
  position: absolute;
  border-radius: 50px;
   width: 9px;
  height: 9px;
  /* width: 39px;
  height: 39px; */
  margin: 0 22px 0 0;
  padding: 13.3px 12px 12.3px 11.7px;
  background-color: #8959fa;
  
}
</style>