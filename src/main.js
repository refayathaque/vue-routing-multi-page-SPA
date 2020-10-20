import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers }, // example of a "dynamic" route
    // order matters! e.g., '/teams/new' should go above '/teams/:teamId', if '/teams/new' is below '/teams/:teamId' it will get interpreted as '/teams/:teamId' and there will be a match when we don't want that
  ],
});

const app = createApp(App)

app.use(router)

app.mount('#app')
