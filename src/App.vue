<template>
  <h1>vue-routing-multi-page-SPA</h1>
  <TheNavigation />
  <main>
    <!-- components that are part of the router need not be globally/locally registered -->
    <router-view> </router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      activePage: "teams-list",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u4"] },
        { id: "t3", name: "Client Consulting", members: ["u1", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
        { id: "u3", fullName: "Julie Jones", role: "Engineer" },
        { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
        { id: "u5", fullName: "Marie Smith", role: "Consultant" },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style></style>
