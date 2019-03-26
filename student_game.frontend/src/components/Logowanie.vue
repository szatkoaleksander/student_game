<template>
  <div class="logowanie">
    <form>
      <div class="form-group">
        <label for="email">Adres email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Wpisz email"
        >
      </div>
      <div class="form-group">
        <label for="haslo">Hasło</label>
        <input
          type="password"
          class="form-control"
          id="haslo"
          placeholder="Password"
        >
      </div>
      <button type="submit" class="btn btn-primary">Logowanie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Logowanie',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
