<template>
  <h2>TeamsItem.vue</h2>
  <h3>{{ name }}</h3>
  <div class="team-members">{{ memberCount }} Members</div>
  <!-- <router-link :to="`/teams/${id}`">View Members</router-link> -->
  <router-link :to="teamMembersLink">View Members</router-link>
</template>

<script>
export default {
  props: ["id", "name", "memberCount"],
  computed: {
    teamMembersLink() {
      // return `/teams/${this.id}`;
      return { name: 'team-members', params: { teamId: this.id } } // example of using "named" routes, preferred pattern over using paths
      // ^ can also be used with programmatic navigation, e.g., this.$router.push({ ... })
    },
  },
};
</script>

<style scoped></style>
