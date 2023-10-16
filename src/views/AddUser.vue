<template>
  <div class="container-main gap-5">
    <div class="d-flex justify-content-around">
      <div class="p-2">Add New User</div>
      <button type="button" class="btn btn-primary" @click="handlerAddUser">
        back
      </button>
    </div>
    <input
      class="form-control form-control-lg"
      type="text"
      placeholder="username"
      aria-label=".form-control-lg example"
      v-model="username"
    />
    <input
      class="form-control form-control-lg"
      type="text"
      placeholder="phone"
      aria-label=".form-control-lg example"
      v-model="phone"
    />
    <input
      class="form-control form-control-lg"
      type="text"
      placeholder="email"
      aria-label=".form-control-lg example"
      v-model="email"
    />
    <button @click="addItem">Save</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AppDemoAddUser",

  data() {
    return {
      items: [],
      username: "",
      phone: "",
      email: "",
      newUser: { username: "", phone: "", email: "" },
    };
  },

  mounted() {},

  methods: {
    addItem: async function () {
      this.items.push(this.newUser);
      console.log(this.items);
      const res = await axios
        .post("https://fakestoreapi.com/users", this.newUser)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      if (res?.data?.token) {
        alert("add success");
      } else {
        alert("failed");
      }
    },
    handlerAddUser() {
      this.$router.push("/listUser");
    },
  },
};
</script>

<style scoped>
.container-main {
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}
</style>
