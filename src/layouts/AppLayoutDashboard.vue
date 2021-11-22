<template>
<header-layout/>
    <div>
        <slot />
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import HeaderLayout from './HeaderLayout.vue'


export default {
  components: { HeaderLayout },
    name:'AppSite',
    setup() {
        const mode = ref("dash")
        provide('mode', mode)
        return{
            mode,
        }
    },
}
</script>