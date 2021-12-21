<template>
<div>
{{section}}
  <SfCallToAction
  />
  </div>
</template>

<script>
import { SfCallToAction } from '@storefront-ui/vue';

export default {
  components: {
    SfCallToAction
  },

  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>