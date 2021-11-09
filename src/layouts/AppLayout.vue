<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { shallowRef } from "@vue/reactivity";

import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  name: "AppLayout",
  setup() {
    const layout = shallowRef('');
    const route = useRoute();

    watch(
      () => route.meta,
      (meta) => {
        try {
          const component = require(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default ;
        } catch (e) {
          console.log(e)
        }
      }
    );
    return { layout };
  },
};
</script>

<style scoped>
</style>