<template>
  <div class="register-form">
      <h2>Create account</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Your email</label>
          <input type="email" id="email" v-model="email" placeholder="name@company.com" required />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
  
        <button type="submit" class="btn-submit">Login an account</button>
      </form>
  
      <p class="login-link">
        Already have an account? <a href="/register">Register here</a>
      </p>
    </div>
</template>

<script >
export default {

}
</script>

<style scoped>
.register-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: black;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  margin-top: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>