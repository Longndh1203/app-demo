<template>
  <div>
    List User
    <button @click="handleAddNew">Add New User</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Firstname</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listUser" :key="index">
          <td>{{ index }}</td>
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
      listUser: [],
      id: "",
    };
  },
  async created() {
    await axios.get("https://fakestoreapi.com/users").then((res) => {
      // console.log(res.data);
      //   console.log("2");
      this.listUser = res.data;
    });
  },

  mounted() {
    // console.log("1");
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
    handleDeleteUser(item) {
      // const res = await axios.delete(`https://fakestoreapi.com/users/${id}`);
      // console.log(res);
      this.$refs["my-modal"].show();
      console.log("item :", item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
