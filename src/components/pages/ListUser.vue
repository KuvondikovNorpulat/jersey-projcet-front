<template>
    <layout-div>
        <div class="container">
            <h2 class="text-center mt-5 mb-3">User Manager</h2>
            <div class="card">
                <div class="card-header">
                    <router-link to="/create"
                        class="btn btn-outline-primary"
                        >Create New User
                    </router-link>
                </div>
                <div class="card-body">
             
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>first Name</th>
                                <th>last Name</th>
                                <th>phone Number</th>
                                <th>username</th>
                                <th>gender</th>
                                <th width="240px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                             
                            <tr v-for="user in users" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.firstName}}</td>
                                <td>{{user.lastName}}</td>
                                <td>{{user.phoneNumber}}</td>
                                <td>{{user.username}}</td>
                                <td>{{user.gender}}</td>
                                <td>
                                    <router-link :to="`/show/${user.id}`" class="btn btn-outline-info mx-1">Show</router-link>
                                    <router-link :to="`/edit/${user.id}`" class="btn btn-outline-success mx-1">Edit</router-link>
                                    <button 
                                        @click="handleDelete(user.id)"
                                        className="btn btn-outline-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                                 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'ListUser',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      users:[]
    };
  },
  created() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      axios.get('/all')
        .then(response => {
            this.users = response.data;
            return response
        })
        .catch(error => {
          return error
        });
    },
    handleDelete(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/delete/${id}`)
                .then( response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'user deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.fetchUserList();
                    return response
                })
                .catch(error => {
                    Swal.fire({
                         icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    return error
                });
            }
          })
    }
  },
};
</script>
