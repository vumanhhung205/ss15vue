<template>
  <div>
     <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav> 
    <Bai7></Bai7>
    <Navbar></Navbar>
    <!-- <nav>
      <button @click="goHome">Home</button>
      <button @click="goAbout">About</button>
      <button @click="goContact">Contact</button>
      <button @click="goProductDetail">Product Detail</button>
      <button @click="goProfile">Profile</button>
    </nav> -->
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Bai7 from "./components/Bai7.vue"
import Navbar from './components/Navbar.vue';
// const router = useRouter();

// const goHome = () => {
//   router.push('/');
// };

// const goAbout = () => {
//   router.push({name: 'about'});
// };

// const goContact = () => {
//   router.push({name: 'contact'});
// };
// const goProductDetail = () => {
//   router.push('/product/7');
// }
// const goProfile = ()=>{
//   router.push('/profile/aa')
// }
</script>

<style>
  nav{
    display: flex;
    gap: 20px;

  }
</style>