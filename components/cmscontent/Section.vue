<template>
  <div>
    <component :is="section.type" :section="section" />
  </div>
</template>

<script>
//import BestSellers from './Section/BestSellers';
//import FeaturedCategories from './Section/FeaturedCategories';
//import CallToAction from './Section/CallToAction';
//import NewsletterSignup from './Section/NewsletterSignup';
//import PromoBanner from './Section/PromoBanner';
//import NewProb from './Section/NewProb';
import FooterImages from "./Section/FooterImages";
import SmallBanner from "./section/SmallBanner";
import Category from "./section/Category";
import newBanner from "./section/newBanner";
import Deals from "./section/Deals";
//import Homepage from './section/FeaturedCategories.vue'
export default {
  components: {
    //bestSellers: BestSellers,
    //featuredCategories: FeaturedCategories,
    //newProb : NewProb,
    //callToAction: CallToAction,
    //newsletterSignup: NewsletterSignup,
    //promoBanner: PromoBanner
    //homepage:Homepage,

    category: Category,
    newbanner: newBanner,
    smallBanner: SmallBanner,

    totalDealsItem: Deals,
    footerImages: FooterImages,
  },
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>