<template>
    <layout-div>
    <h2 class="text-center mt-5 mb-3">Create New User</h2>
    <div class="card">
        <div class="card-header">
            <router-link 
                class="btn btn-outline-info float-right"
                to="/">View All Users
            </router-link>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label htmlFor="firstName">FirstName</label>
                    <input 
                        v-model="user.firstName"
                        type="text"
                        class="form-control"
                        id="firstName"
                        name="firstName"/>
                </div>
                <div class="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        v-model="user.lastName"
                        type="text"
                        class="form-control"
                        id="lastName"
                        name="lastName"/>
                </div>
                <div class="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        v-model="user.phoneNumber"
                        type="tel"
                        class="form-control"
                        id="phoneNumber"
                        name="phoneNumber"/>
                </div>
                <div class="form-group">
                    <label htmlFor="username">Email</label>
                    <input
                        v-model="user.username"
                        type="email"
                        class="form-control"
                        id="username"
                        name="username"/>
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"/>
                </div>
                <div class="form-group">
    <label htmlFor="gender">Gender</label>
    <select
        v-model="user.gender"
        class="form-control"
        id="gender"
        name="gender">
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
    </select>
</div>
                <button 
                    @click="handleSave()"
                    :disabled="isSaving"
                    type="button"
                    class="btn btn-outline-primary mt-3">
                    Save User
                </button>
            </form>
        </div>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'CreateUser',
  components: {
    LayoutDiv,
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        username: '',
        password: '',
        gender: ''
      },
      isSaving:false,
    };
  },
  methods: {
    handleSave() {
        this.isSaving = true
        axios.post('/create', this.user)
          .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'user saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            this.isSaving = false
            this.user.firstName = ""
            this.user.lastName = ""
            this.user.phoneNumber = ""
            this.user.username = ""
            this.user.password = ""
            this.user.gender = ""
            return response
          })
          .catch(error => {
            this.isSaving = false
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            return error
          });
    },
  },
};
</script>
