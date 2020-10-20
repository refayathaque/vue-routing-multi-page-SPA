<template>
  <h2>UserList.vue</h2>
  <button @click="goToTeams">Go to Teams</button>
</template>

<script>
export default {
  methods: {
    goToTeams() {
      this.$router.push('/teams')
      // ^ "programmatic navigation"
    }
  }
}
</script>

<style scoped>

</style>