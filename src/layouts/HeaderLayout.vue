<template>
    <div>
        <Headersite v-if="mode == 'site'"/> 
        <HeaderDash v-if="mode == 'dash'"/> 
   </div>
</template>
<script>
import { inject } from '@vue/runtime-core'
import Headersite from '../components/Header.vue'
import HeaderDash from '../components/HeaderDash.vue'


export default {
  components: { Headersite, HeaderDash },
    name:'HeaderLayout',
    setup() {
        const mode = inject('mode', null)
        console.log(mode.value)
        return{
            mode
        }
    },
}
</script>
