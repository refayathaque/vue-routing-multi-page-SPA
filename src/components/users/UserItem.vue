<template>
  <h2>UserItem.vue</h2>
  <h4>{{ name }}</h4>
  <div class="role" :class="roleClass">{{ role }}</div>
</template>

<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Engineer') {
        return 'role-engineer';
      }
      if (this.role === 'Consultant') {
        return 'role-consultant';
      }
      return null;
    },
  },
}
</script>

<style scoped>
.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}
.role-consultant, .role-engineer {
  color: white;
}
.role-engineer {
  background-color: blue;
}
.role-consultant {
  background-color: #af003a;
}
</style>