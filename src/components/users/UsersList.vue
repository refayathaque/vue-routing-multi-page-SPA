<template>
  <h2>UserList.vue</h2>
  <button @click="goToTeams">Go to Teams</button>
  <button @click="saveChanges">Save changes</button>
</template>

<script>
export default {
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    goToTeams() {
      this.$router.push("/teams");
      // ^ "programmatic navigation"
    },
    saveChanges() {
      this.changesSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter navigation guard', to, from)
    next();
  },
  beforeRouteLeave(to, from, next) {
    // useful when you want to preclude user from navigating away from component if they have unsaved form data for example
    console.log('UsersList Cmp beforeRouteLeave navigation guard', to, from)
    if (this.changesSaved) {
      next()
    } else {
      const userWantsToLeave = confirm('Are you sure you want to leave? You have unsaved changes');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped></style>
