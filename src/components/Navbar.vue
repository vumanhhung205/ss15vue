<template>
  <nav>
        <router-link exact-active-class="active" to="/dashboard">Dashboard</router-link>
        <router-link exact-active-class="active" to="/account">Account</router-link>
        <router-link exact-active-class="active" to="/product">Product</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.active{
    background-color: blue;
    color: #fff;
    font-weight: 700
}
</style>