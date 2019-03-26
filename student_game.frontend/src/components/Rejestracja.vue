<template>
  <div class="rejestracja">
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
        <label for="nick">Nick</label>
        <input
          type="text"
          class="form-control"
          id="nick"
          placeholder="Nick"
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
      <button type="submit" class="btn btn-primary">Rejestracja</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Rejestracja',
  props: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
