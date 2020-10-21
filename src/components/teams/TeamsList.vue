<template>
  <h2>TeamsList.vue</h2>
  <button @click="goToUsers">Go to Users</button>
  <router-view></router-view>
  <TeamsItem v-for="team in teams" :key="team.id" :id="team.id" :name="team.name" :member-count="team.members.length" />
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  inject: ['teams'],
  components: {
    TeamsItem
  },
  methods: {
    goToUsers() {
      this.$router.push('/users')
      // ^ "programmatic navigation"
    }
  }
}
</script>

<style scoped>

</style>