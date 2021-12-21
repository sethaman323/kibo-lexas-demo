<template>
  <div id="home">
    <ContentPage v-if="content[0]" :page="content[0]"> </ContentPage>
    <!-- <SfCallToAction
        title="Subscribe to Newsletters"
        button-text="Subscribe"
        description="Be aware of upcoming sales and events. Receive gifts and special offers!"
        image="/homepage/newsletter.webp"
        class="call-to-action"
      /> -->
  </div>
</template>
<script>
// import {

//   SfCallToAction,
// } from '@storefront-ui/vue';
import { useContent } from "vsf-lexascms";
import { onSSR } from "@vue-storefront/core";
import ContentPage from "~/components/ContentPage.vue";

export default {
  name: "Home",

  components: {
    ContentPage,
    // SfCallToAction,
  },

  // setup() {
  //   const { search, content, loading, error } = useContent();
    setup(_, context) {
   const { content, search } = useContent();


    onSSR(async () => {
      let requestContext;
      const { lexascmsRequestContext, localTemp } = context.root.$route.query;
      if (lexascmsRequestContext !== undefined) {
        requestContext = lexascmsRequestContext;
      } else {
        requestContext = {
          audienceAttributes: {
            localTemperature: localTemp ? parseInt(localTemp, 10) : null,
          },
        };
      }
      await search({
        type: "collection",
        contentType: "contentPage",
        params: {
          filter: {
            slug: { _eq: "homepage" },
          },
          page: {
            limit: 1,
            sections: {
              limit: 10,
              bannerItems: {
                limit: 5,
              },
              items: {
                limit: 10,
              },
              banner: {
                limit: 4,
              },
              dealsItem: {
                limit: 15,
              },
              featuredCategories: {
                limit: 4,
              },
            },
          },
          include:
            "sections," +
            "sections.banner,sections.banner.image," +
            "sections.backgroundImage," +
            "sections.items,sections.items.image," +
            "sections.dealsItem,sections.dealsItem.image," +
            "sections.arrow",
        },
        context: requestContext
      });
    });
    //as mike told to return promo banners
     return { content }
  },
};
</script>
