<template>
    
        <HeaderLayout/>
    
    
 
        <slot />

</template>
<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'

import HeaderLayout from './HeaderLayout.vue'


export default {
  components: { HeaderLayout },
    name:'AppLayoutSite',
    setup() {
        const mode = ref("site")
        provide('mode', mode)
        return{
            mode,
        }
    },
}
</script>