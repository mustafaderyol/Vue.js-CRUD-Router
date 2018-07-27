<template>
  <div class="customer container">
    <h1 class="page-header">Manage Customers</h1>
    <Alert v-bind:message="alert" v-if="alert"></Alert>
    <table class="table table-striped">
      <thead>
        <tr>
          <td>ID</td>
          <td>Email</td>
          <td>Password</td>
          <td>Insert Date</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{customer._id}}</td>
          <td>{{customer.email}}</td>
          <td>{{customer.password}}</td>
          <td>{{customer.insertDate}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert';
  export default {
    name: 'Customers',
    components: {Alert},
    data () {
      return {
        customers:[],
        alert:''
      }
    },
    methods:{
      fetchCustomers(){
        this.$http.get("http://localhost:3000/api/user/getAll").then(function (response) {
          let value = JSON.parse(JSON.stringify(response.body));
          this.customers = value.data;
        });
      }
    },
    created:function () {
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated:function () {
      this.fetchCustomers();
    },
    components:{
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
