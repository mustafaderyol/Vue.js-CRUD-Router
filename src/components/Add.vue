<template>
  <div class="add container">
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="customer.email"/>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="customer.password"/>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        customer:{}
      }
    },
    methods:{
      addCustomer(e){
        if(!this.customer.email || !this.customer.password){
          console.log("Please fill in all required fields");
        }else{
          let newCustomer ={
            email: this.customer.email,
            password: this.customer.password
          };
          this.$http.post("http://localhost:3000/auth/register", newCustomer).then(function (response) {
              this.$router.push({path:'/',query:{alert:'Customer Added'}});
          });
          e.preventDefault();
        }
        e.preventDefault();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
