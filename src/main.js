import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      components: { default: TeamsList, footer: TeamsFooter },
      // ^ keys here correspond to the named router views in `main.js`
      children: [
        // {
        //   path: "default",
        //   component: NotFound,
        // },
        // ^ if you want to have a "default" nested child component being rendered first
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
          // query parameters are optional by nature so you don't have to have them here, just include in <router-link></router-link> object
        },
      ],
      // children routes will require `<router-view></router-view` in the parent component's (TeamsList.vue in this case) template
    },
    { path: "/users", components: { default: UsersList, footer: UsersFooter } },

    // { path: "/teams/:teamId", component: TeamMembers, props: true },
    // ^ example of a "dynamic" route, `props: true` makes the dynamic params accessible in the component as props, instead of just being accessible through `this.$route.params/$route.params`
    // benefit of passing in dynamic params as props is that now the component is truly reusable, instead of only being able to be rendered through the router, since it takes props you can pass in required data to the component through regular regular "rendering within a component"
    // * commented out because it's now nested within TeamsList component as a child route

    { path: "/:catchAll(.*)", component: NotFound },
    // order matters! e.g., '/teams/new' should go above '/teams/:teamId', if '/teams/new' is below '/teams/:teamId' it will get interpreted as '/teams/:teamId' and there will be a match when we don't want that
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
