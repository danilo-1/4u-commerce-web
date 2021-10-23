<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import { shallowRef } from "@vue/reactivity";
import AppLayoutDefault from "./AppLayoutDefault.vue";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  name: "AppLayout",
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();

    watch(
      () => route.meta,
      (meta) => {
        try {
          const component = require(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault;
        }
      }
    );
    return { layout };
  },
};
</script>

<style scoped>
</style>