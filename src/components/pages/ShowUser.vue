<template>
    <layout-div>
        <h2 class="text-center mt-5 mb-3">Show User</h2>
        <div class="card">
            <div class="card-header">
                <router-link 
                    class="btn btn-outline-info float-right"
                    to="/">View All Users
                </router-link>
            </div>
            <div class="card-body">
                <b className="text-muted">firstName:</b>
                <p>{{user.firstName}}</p>
                <b className="text-muted">lastName:</b>
                <p>{{user.lastName}}</p>
                <b className="text-muted">phoneNumber:</b>
                <p>{{user.phoneNumber}}</p>
                <b className="text-muted">username:</b>
                <p>{{user.username}}</p>
                <b className="text-muted">gender:</b>
                <p>{{user.gender}}</p>
            </div>
        </div>
   </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from '../LayoutDiv.vue';
import Swal from 'sweetalert2'
 
export default {
  name: 'userShow',
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
        gender: '',
      },
      isSaving:false,
    };
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`/${id}`)
    .then(response => {
        let userInfo = response.data
        this.user.firstName = userInfo.firstName
        this.user.lastName = userInfo.lastName
        this.user.phoneNumber = userInfo.phoneNumber
        this.user.username = userInfo.username
        this.user.gender = userInfo.gender
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
    })
  },
  methods: {
     
  },
};
</script>