<template>
    <div class="login">
      <div id="nav" class="btn-group" role="group">
        <button type="button" class="btn btn-primary" v-on:click="value = true">Logowanie</button>
        <button type="button" class="btn btn-primary" v-on:click="value = false">Rejestracja</button>
      </div>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'login',
  components: {
    Login,
    Register
  },

  props: {
    value: {
      default: true,
      type: Boolean
    }
  },

  computed: {
    dynamicComponent () {
      if (this.value) {
        return 'Login'
      } else {
        return 'Register'
      }
    }
  }
}
</script>

<style>

</style>
