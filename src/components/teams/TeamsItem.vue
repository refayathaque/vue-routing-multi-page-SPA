<template>
  <h2>TeamsItem.vue</h2>
  <h3>{{ name }}</h3>
  <div class="team-members">{{ memberCount }} Members</div>
  <!-- <router-link :to="`/teams/${id}`">View Members</router-link> -->
  <router-link :to="teamMembersLink">View Members</router-link>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() { return `/teams/${this.id}` }
  }
}
</script>

<style scoped>

</style>