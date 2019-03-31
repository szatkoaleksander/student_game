<template>
    <div class="logowanie">
      <div id="nav">
        <button type="button" class="btn btn-outline-primary menu" v-on:click="value = true">Logowanie</button> 
        <button type="button" class="btn btn-outline-primary" v-on:click="value = false">Rejestracja</button>
    </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
    </div>
</template>

<script>
import Logowanie from '@/components/Logowanie.vue'
import Rejestracja from '@/components/Rejestracja.vue'

export default {
  name: 'logowanie',
  components: {
    Logowanie,
    Rejestracja
  },

  props: {
    value: {
    default: true,
    type: Boolean
  }
  },

  computed: {
    dynamicComponent() {
      console.log(this.value)
      if(this.value) {
        return 'Logowanie'
      } else {
        return 'Rejestracja'
      }
    }
  }
}
</script>

<style>
.menu {
 margin: 5px;
}
</style>

