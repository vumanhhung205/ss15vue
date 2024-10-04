<template>
  <div>
    <nav>
        <router-link exact-active-class="active" to="/">Home</router-link>
        <router-link exact-active-class="active" to="/product">Product</router-link>
        <router-link exact-active-class="active" to="/detail">Detail</router-link>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
.active{
    background-color: rgb(0, 149, 255);
    color: white;
}
</style>