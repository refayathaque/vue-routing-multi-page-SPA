<template>
  <h1>vue-routing-multi-page-SPA</h1>
  <TheNavigation />
  <main>
    <!-- components that are part of the router need not be globally/locally registered -->
    <router-view>
    </router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'

export default {
  components: {
    TheNavigation
  }
}
</script>

<style>

</style>
