<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/addNewUser">Add new user</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/listUser">List User</router-link> |
    </nav> -->
    <login_app></login_app>
    <router-view />
  </div>
</template>
<script>
import Login from "./views/Login.vue";

export default {
  component: {
    login_app: Login,
  },
};
</script>

<style></style>
