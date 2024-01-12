<template>
  <div class="container">
    <h1 class="text-center">User List</h1>
    <table class="table table-striped">
      <thead>
        <th>user Id</th>
        <th>user First Name</th>
        <th>user Last Name</th>
        <th>user phone number</th>
        <th>user username</th>
        <th>user gender</th>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.phoneNumber }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.gender }}</td>
          <td>
            <button @click="editUser(user.id)">Edit</button>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import userService from "../services/userService";

export default {
  name: "userList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await userService.getUsers();
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async editUser(id) {
      try {
        const response = await userService.getUserById(id);
        // Assuming you have a separate component for user editing
        // Pass the user data to the editing component or modal
        this.$emit("edit-user", response.data);
      } catch (error) {
        console.error("Error fetching user for editing:", error);
      }
    },
    async deleteUser(id) {
      try {
        await userService.deleteUser(id);
        // Refresh the user list after deletion
        this.getUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
  },
  created() {
    this.getUsers();
  },
};
</script>