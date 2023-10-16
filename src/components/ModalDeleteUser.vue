<template>
  <div>
    <b-modal
      ref="my-modal"
      hide-footer
      title="Using Component Methods"
      @click="handleSelectItem"
    >
      <div class="d-block text-center">
        <h5>Delete User</h5>
        <br />
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Close</b-button
      >
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Delete</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AppDemoModalDeleteUser",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
