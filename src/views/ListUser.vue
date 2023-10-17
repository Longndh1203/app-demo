<template>
  <div class="container-list">
    <div class="d-flex justify-content-between p-5">
      <h2>List User</h2>
      <button class="btn btn-primary" @click="handleAddNew">
        Add New User
      </button>
    </div>
    <button class="btn btn-primary" @click="handleLogOut">Log out</button>

    <table class="table m-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Firstname</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>
            <b-button id="show-btn" @click="handleDeleteUser(item)"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>

    <modalDelete></modalDelete>
  </div>
</template>

<script>
import axios from "axios";
import ModalDeleteUser from "@/components/ModalDeleteUser.vue";

export default {
  name: "AppDemoListUser",
  components: {
    modalDelete: ModalDeleteUser,
  },

  data() {
    return {
      modalShow: false,
      itemSelected: {},
      // listUser: [],
      id: "",
      // newListUser: [],
    };
  },
  async created() {
    // await axios.get("https://fakestoreapi.com/users").then((res) => {
    //   // console.log(res.data);
    //   //   console.log("2");
    //   this.listUser = res.data;
    // });
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
    // console.log("1");
    // let token = localStorage.getItem("token");
    // if (!token) {
    //   this.$router.push("/login");
    // }
  },
  watch: {
    response: function () {
      //   console.log("3");
      //   console.log(this.response);
    },
  },
  updated() {
    // console.log("4");
    // console.log(this.listUser);
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    handleAddNew() {
      this.$router.push("/addNewUser");
    },
    handleSelectItem(item) {
      this.itemSelected = item;
      this.$bvModal.show("bv-modal-example");
    },
    async handleDeleteUser(user) {
      const res = await axios.delete(
        `https://fakestoreapi.com/users/${user.id}`
      );
      // console.log(res);

      if (res) {
        const index = this.products.indexOf(user.id);
        this.products.splice(index, 1);
      }
      // this.$refs["my-modal"].show();
      // console.log("item :", item);
    },

    handleLogOut() {
      let token = localStorage.getItem("token");
      localStorage.removeItem("token", token);
      this.$router.push("/addNewUser");
    },
  },
};
</script>

<style scoped>
.container-list {
  max-width: 1380px;
  margin: 0 auto;
}
.list-user_text {
  margin: auto 0;
}
</style>
