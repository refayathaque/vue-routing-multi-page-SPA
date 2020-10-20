<template>
  <h2>TeamMembers.vue</h2>
  <h3>{{ teamName }}</h3>
  <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role" />
  <p><router-link to="/teams/t3">View Team 3 Members</router-link></p>
</template>

<script>
import UserItem from '../users/UserItem.vue'

export default {
  inject: [ 'users', 'teams' ],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    }
  },
  methods: {
    loadTeamMembers({ params }) {
      const teamId = params.teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = []
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.$route)
  },
  watch: {
    $route(newRoute) { // we have to manually "reload" data whenever params change, allowing us to successfully navigate when, e.g., a user wants to see another team members page from the one they're on right now (look at template)
    // without this, the `<router-link></router-link>` will still update the param but the component itself will not be re-rendered since it's already rendered (caching done behind the scenes to maintain efficiency)
      this.loadTeamMembers(newRoute)
    }
  }
}
</script>

<style scoped>

</style>