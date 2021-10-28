<template>
    <div>
        <slot />
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'


export default {
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