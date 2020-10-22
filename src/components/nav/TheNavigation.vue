<template>
  <div>
    <h2>TheNavigation.vue</h2>
    <p><router-link to="/teams">Teams</router-link></p>
    <p><router-link to="/users">Users</router-link></p>
    <!-- ^ for css styling target `a` (anchor) tags, because `router-link` under the hood renders an anchor tag-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: blanchedalmond;
}
a {
  color: lightcoral;
  border: 1px solid black;
  background: yellowgreen;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}
a.router-link-active {
  color: green;
  border: 1px solid aqua;
  background: chocolate;
}
/* class above is built in to <router-link> */
</style>
